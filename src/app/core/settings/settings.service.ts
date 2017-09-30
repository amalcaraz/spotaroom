import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class SettingsService {

  private _settings = environment.settings;

  constructor() {
  }

  get(key: string) {

    return this._settings[key];

  }

}
