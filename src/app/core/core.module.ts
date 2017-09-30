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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeCardModule } from './homecard/homecard.module';


@NgModule({
  imports: [
    HttpModule,
    NgbModule.forRoot(),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument({maxAge: 10}) : [],
    StoreRouterConnectingModule,
    HomeCardModule
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
