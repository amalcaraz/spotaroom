import { Injectable } from '@angular/core';
import { HttpClient, HttpParameterCodec, HttpParams } from '@angular/common/http';
import * as format from 'string-format';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';

import { SettingsService } from '../settings/settings.service';
import { HomeCard, HomeCardId, HomeCardRequestOptions, HomeCardResponse } from './homecard.model';
import { SarQueryEncoder } from '../utils/query-encoder';
import { environment } from '../../../environments/environment';


export const DEFAULT_HOME_CARD_OPTIONS: HomeCardRequestOptions = {
  offset: 0,
  count: environment.maxItems
};

@Injectable()
export class HomeCardService {

  private _settings: {};

  constructor(private _settingsService: SettingsService,
              private _http: HttpClient) {

    this._settings = this._settingsService.get('homecard');

  }

  get(homeCardIds: HomeCardId[], options?: HomeCardRequestOptions): Observable<HomeCard[]> {

    options = {...DEFAULT_HOME_CARD_OPTIONS, ...options};

    const url: string = format(this._settings['host'] + this._settings['base'] + this._settings['resource']);
    const params: HttpParams = this.obtainHomeCardParams(homeCardIds, options);

    return this._http
      .get(url, {params})
      .do((response) => console.log(`Requested ${url}`, response))
      .map((response) => (response as HomeCardResponse).data.homecards as HomeCard[]);

  }

  private obtainHomeCardParams(homeCardIds: HomeCardId[], options: HomeCardRequestOptions): HttpParams {

    // TODO: This should work... but angular is generating the array params names without '[]' postfix
    /*return markers
     .slice(filters.offset, filters.count)
     .reduce((params: HttpParams, marker: Marker) => {

     params.append('ids', marker.id.toString());
     return params;

     }, new HttpParams());*/

    const idParams: string = homeCardIds
      .slice(options.offset, options.count)
      .map((id: HomeCardId) => 'ids[]=' + id)
      .join('&');

    const encoder: HttpParameterCodec = new SarQueryEncoder();
    const params: HttpParams = new HttpParams({fromString: idParams, encoder});

    return params;

  }

}
