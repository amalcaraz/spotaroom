import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import * as format from 'string-format';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { SettingsService } from '../settings/settings.service';
import { CityId } from '../../app.model';
import { MarkerRequestOptions, MarkerResponse } from './marker.model';
import { SarQueryEncoder } from '../utils/query-encoder';


export const DEFAULT_MARKER_FILTER = 'all';

export const DEFAULT_MARKER_OPTIONS: MarkerRequestOptions = {
  filter: DEFAULT_MARKER_FILTER
};

@Injectable()
export class MarkerService {

  private _settings: {};

  constructor(private _settingsService: SettingsService,
              private _http: Http) {

    this._settings = this._settingsService.get('marker');

  }

  get(city: CityId, options?: MarkerRequestOptions): Observable<MarkerResponse> {

    options = {...DEFAULT_MARKER_OPTIONS, ...options};

    const url: string = format(this._settings['host'] + this._settings['resource'], city);
    const params: URLSearchParams = this.obtainMarkerParams(options);

    return this._http
      .get(url, {params})
      .map((response) => response.json() as MarkerResponse);

  }

  private obtainMarkerParams(options: MarkerRequestOptions): URLSearchParams {

    const params = new URLSearchParams('', new SarQueryEncoder());

    if (options.filter !== DEFAULT_MARKER_FILTER) {

      params.append('type[]', options.filter);

    }

    return params;

  }

}
