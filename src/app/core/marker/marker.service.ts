import { Injectable } from '@angular/core';
import { HttpClient, HttpParameterCodec, HttpParams } from '@angular/common/http';
import * as format from 'string-format';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { SettingsService } from '../settings/settings.service';
import { CityId } from '../../app.model';
import { MarkerRequestOptions, MarkerResponse } from './marker.model';
import { SarQueryEncoder } from '../utils/query-encoder';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/do';


export const DEFAULT_MARKER_FILTER = 'all';

export const DEFAULT_MARKER_OPTIONS: MarkerRequestOptions = {
  filter: DEFAULT_MARKER_FILTER,
  count: environment.maxItems
};

@Injectable()
export class MarkerService {

  private _settings: {};

  constructor(private _settingsService: SettingsService,
              private _http: HttpClient) {

    this._settings = this._settingsService.get('marker');

  }

  getByCity(city: CityId, options?: MarkerRequestOptions): Observable<MarkerResponse> {

    options = {...DEFAULT_MARKER_OPTIONS, ...options};

    const url: string = format(this._settings['host'] + this._settings['base'] + this._settings['resource'], city);
    const params: HttpParams = this.obtainMarkerParams(options);

    return this._http
      .get(url, {params})
      .do((response) => console.log(`Requested ${url}`, response))
      .map((response) => response as MarkerResponse);

  }

  private obtainMarkerParams(options: MarkerRequestOptions): HttpParams {

    const encoder: HttpParameterCodec = new SarQueryEncoder();
    let typeParams = '';

    if (options.filter !== DEFAULT_MARKER_FILTER) {

      typeParams = `type[]=${options.filter}`;

    }

    return new HttpParams({fromString: typeParams, encoder});

  }

}
