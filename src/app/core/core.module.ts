import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { MarkerService } from './marker/marker.service';
import { HomeCardService } from './homecard/homecard.service';
import { CustomRouterStateSerializer, reducers } from './core.reducer';
import { environment } from '../../environments/environment';
import { SettingsService } from './settings/settings.service';


@NgModule({
  imports: [
    HttpModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument({maxAge: 10}) : [],
    StoreRouterConnectingModule
  ],
  exports: [],
  providers: [
    SettingsService,
    MarkerService,
    HomeCardService,
    {provide: RouterStateSerializer, useClass: CustomRouterStateSerializer},
  ]
})
export class CoreModule {
}
