import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import * as format from 'string-format';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

import { SettingsService } from '../settings/settings.service';
import { CityId } from '../../app.model';
import { HomeCard, HomeCardRequestOptions, HomeCardResponse } from './homecard.model';
import { MarkerService } from '../marker/marker.service';
import { Marker, MarkerResponse } from '../marker/marker.model';


export const DEFAULT_HOME_CARD_OPTIONS: HomeCardRequestOptions = {
  count: 30,
  offset: 0
};

@Injectable()
export class HomeCardService {

  private _settings: {};

  constructor(private _settingsService: SettingsService,
              private _http: Http,
              private _markerService: MarkerService) {

    this._settings = this._settingsService.get('homecard');

  }

  get(city: CityId, options?: HomeCardRequestOptions): Observable<HomeCard[]> {

    options = {...DEFAULT_HOME_CARD_OPTIONS, ...options};

    return this._markerService
      .get(city, options)
      .switchMap((markerResponse: MarkerResponse) => {

        if (markerResponse.ok && markerResponse.data.length > 0) {

          const url: string = format(this._settings['host'] + this._settings['resource']);
          const params: URLSearchParams = this.obtainHomeCardParams(markerResponse.data, options);

          return this._http
            .get(url, {params})
            .map((response: Response) => (response.json() as HomeCardResponse).data.homecards as HomeCard[]);

        } else {

          return Observable.of([] as HomeCard[]);

        }

      });

  }

  private obtainHomeCardParams(markers: Marker[], options: HomeCardRequestOptions): URLSearchParams {

    // TODO: This should work... but angular is generating the array params names without '[]' postfix
    /*return markers
     .slice(filters.offset, filters.count)
     .reduce((params: URLSearchParams, marker: Marker) => {

     params.append('ids', marker.id.toString());
     return params;

     }, new URLSearchParams());*/

    const idParams: string = markers
      .slice(options.offset, options.count)
      .map((marker: Marker) => 'ids[]=' + marker.id)
      .join('&');

    return new URLSearchParams(idParams);

  }

}