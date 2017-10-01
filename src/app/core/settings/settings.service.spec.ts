import { async, TestBed } from '@angular/core/testing';

import { SETTINGS, SettingsService } from './settings.service';


describe('SettingsService', () => {

  const settings: any = {
    hello: 'whatever'
  };

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      providers: [
        SettingsService,
        {provide: SETTINGS, useValue: settings}
      ],
    }).compileComponents();

  }));

  beforeEach(() => {

    this.service = TestBed.get(SettingsService);

  });

  it('should instantiate the service', async(() => {

    expect(this.service instanceof SettingsService).toBeTruthy();

  }));

  it(`should get the property from the configuration`, async(() => {

    expect(this.service.get('hello')).toEqual('whatever');

  }));

});
