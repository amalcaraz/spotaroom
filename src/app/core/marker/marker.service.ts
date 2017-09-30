import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as format from 'string-format';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { SettingsService } from '../settings/settings.service';
import { CityId } from '../../app.model';
import { MarkerResponse } from './marker.model';


@Injectable()
export class MarkerService {

  private _settings: {};

  constructor(private _settingsService: SettingsService,
              private _http: Http) {

    this._settings = this._settingsService.get('marker');

  }

  get(city: CityId): Observable<MarkerResponse> {

    const url: string = format(this._settings['host'] + this._settings['resource'], city);

    return this._http
      .get(url)
      .map((response) => response.json() as MarkerResponse);

  }

}
