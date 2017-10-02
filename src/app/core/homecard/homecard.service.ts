import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import * as format from 'string-format';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

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
              private _http: Http) {

    this._settings = this._settingsService.get('homecard');

  }

  get(homeCardIds: HomeCardId[], options?: HomeCardRequestOptions): Observable<HomeCard[]> {

    options = {...DEFAULT_HOME_CARD_OPTIONS, ...options};

    const url: string = format(this._settings['host'] + this._settings['resource']);
    const params: URLSearchParams = this.obtainHomeCardParams(homeCardIds, options);

    return this._http
      .get(url, {params})
      .map((response: Response) => (response.json() as HomeCardResponse).data.homecards as HomeCard[]);

  }

  private obtainHomeCardParams(homeCardIds: HomeCardId[], options: HomeCardRequestOptions): URLSearchParams {

    // TODO: This should work... but angular is generating the array params names without '[]' postfix
    /*return markers
     .slice(filters.offset, filters.count)
     .reduce((params: URLSearchParams, marker: Marker) => {

     params.append('ids', marker.id.toString());
     return params;

     }, new URLSearchParams());*/

    const idParams: string = homeCardIds
      .slice(options.offset, options.count)
      .map((id: HomeCardId) => 'ids[]=' + id)
      .join('&');

    return new URLSearchParams(idParams, new SarQueryEncoder());

  }

}
