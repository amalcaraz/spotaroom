import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import * as format from 'string-format';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

import { SettingsService } from '../settings/settings.service';
import { CityId } from '../../app.model';
import { HomeCardResponse } from './homecard.model';
import { MarkerService } from '../marker/marker.service';
import { Marker, MarkerResponse } from '../marker/marker.model';


export interface HomeCardRequestFilters {
  count: number;
  offset: number;
}

export const DEFAULT_FILTERS: HomeCardRequestFilters = {
  count: 30,
  offset: 0
};

@Injectable()
export class HomeCardService {

  private _settings: {};

  constructor(private _settingsService: SettingsService,
              private _http: Http,
              private _markerSerivce: MarkerService) {

    this._settings = this._settingsService.get('homecard');

  }

  get(city: CityId, filters: HomeCardRequestFilters = DEFAULT_FILTERS): Observable<HomeCardResponse> {

    return this._markerSerivce
      .get(city)
      .switchMap((markerResponse: MarkerResponse) => {

        if (markerResponse.ok && markerResponse.data.length > 0) {

          const url: string = format(this._settings['host'] + this._settings['resource']);

          const options: RequestOptions = new RequestOptions();
          options.params = this.obtainParams(markerResponse.data, filters);

          return this._http
            .get(url, options)
            .map((response) => response.json() as HomeCardResponse);

        } else {

          return Observable.of({} as HomeCardResponse);

        }

      });

  }

  private obtainParams(markers: Marker[], filters: HomeCardRequestFilters): URLSearchParams {

    // TODO: This should work... but angular is generating the array params names without '[]' postfix
    /*return markers
      .slice(filters.offset, filters.count)
      .reduce((params: URLSearchParams, marker: Marker) => {

        params.append('ids', marker.id.toString());
        return params;

      }, new URLSearchParams());*/

    const idParams: string = markers
      .slice(filters.offset, filters.count)
      .map((marker: Marker) => 'ids[]=' + marker.id)
      .join('&');

    return new URLSearchParams(idParams);

  }

}
