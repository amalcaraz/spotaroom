import { NgModule } from '@angular/core';

import { SETTINGS, SettingsService } from './settings.service';
import { environment } from '../../../environments/environment';


@NgModule({
  providers: [
    SettingsService,
    {provide: SETTINGS, useValue: environment.settings}
  ],
})
export class SettingsModule {
}
