import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';


export const SETTINGS = new InjectionToken('SETTINGS');

@Injectable()
export class SettingsService {

  constructor(@Optional() @Inject(SETTINGS) private _settings) {
  }

  get(key: string) {

    return this._settings[key];

  }

}
