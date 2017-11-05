import { inject, TestBed } from '@angular/core/testing';
import { HttpModule, RequestMethod, Response, XHRBackend, URLSearchParams } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { SettingsService } from '../settings/settings.service';
import { DEFAULT_MARKER_FILTER, MarkerService } from './marker.service';
import { MarkerResponse } from './marker.model';
import { SarQueryEncoder } from '../utils/query-encoder';
import createSpy = jasmine.createSpy;


describe('MarkerService', () => {

  const mockedCityParam = 'madrid';

  class SettingsServiceStub {
    get() {
      return {
        host: 'host.com',
        base: '/base',
        resource: '/resource/{0}'
      };
    }
  }

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        MarkerService,
        MockBackend,
        {provide: XHRBackend, useExisting: MockBackend},
        {provide: SettingsService, useClass: SettingsServiceStub}
      ]
    });

  });

  beforeEach(inject([MockBackend, MarkerService], (_mockBackend: MockBackend, _markerService: MarkerService) => {

    this.mockBackend = _mockBackend;
    this.markerService = _markerService;

  }));


  it('should instantiate correctly', () => {

    expect(this.markerService instanceof MarkerService).toBeTruthy();

  });

  describe('::get()', () => {

    it('should obtain a list of markers by the given city', () => {

      const returnedValue = new URLSearchParams('type[]=room', new SarQueryEncoder());
      const obtainMarkerParamsSpy = spyOn<any>(this.markerService, 'obtainMarkerParams').and.returnValue(returnedValue);
      const getInputOptions = {filter: 'whatever'};
      const response: MarkerResponse = {} as MarkerResponse;

      this.mockBackend
        .connections
        .subscribe((c: MockConnection) => {

          expect(c.request.method).toBe(RequestMethod.Get);
          expect(c.request.url).toContain(`host.com/base/resource/${mockedCityParam}`);
          expect(c.request.url).toContain(`type[]=room`);

          c.mockRespond(new Response({
            status: 200,
            body: response,
          } as any));

        });

      this.markerService
        .getByCity(mockedCityParam, getInputOptions)
        .subscribe((result: MarkerResponse) => {

          expect(result).toBe(response);
          expect(obtainMarkerParamsSpy).toHaveBeenCalled();

          const options = obtainMarkerParamsSpy.calls.mostRecent().args[0];
          expect(options.filter).toEqual(getInputOptions.filter);

        });

    });

    it('should throw an exception if there is an error retrieving the data from backend', () => {

      this.mockBackend
        .connections
        .subscribe((c: MockConnection) => {

          expect(c.request.method).toBe(RequestMethod.Get);
          c.mockError(new Error('Error 500 from server'));

        });

      this.markerService
        .getByCity(mockedCityParam)
        .subscribe(
          () => {
            fail('should fail');
          },
          (err) => {
            expect(err.toString()).toContain('Error 500 from server');
          }
        );

    });

  });

  it('::obtainMarkerParams() should obtain the filter param only if it is not the default filter param', () => {

    let params: URLSearchParams = this.markerService.obtainMarkerParams({filter: 'whatever'});
    expect(params.toString()).toContain('type[]=whatever');

    params = this.markerService.obtainMarkerParams({filter: DEFAULT_MARKER_FILTER});
    expect(params.toString()).not.toContain('type[]=whatever');

  });

});
