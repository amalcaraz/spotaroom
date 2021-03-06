import { NgModule, Optional, SkipSelf } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CustomRouterStateSerializer, reducers } from './core.reducer';
import { environment } from '../../environments/environment';
import { HomeCardModule } from './homecard/homecard.module';
import { ResponsiveModule } from './responsive/responsive.module';
import { WindowRef } from './window/window.service';
import { SettingsModule } from './settings/settings.module';
import { MarkerModule } from './marker/marker.module';
import { MemHttpModule } from './mem-http/mem-http.module';


@NgModule({
  imports: [
    MemHttpModule,
    NgbModule.forRoot(),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument({maxAge: 10}) : [],
    StoreRouterConnectingModule,
    SettingsModule,
    ResponsiveModule,
    MarkerModule,
    HomeCardModule
  ],
  exports: [],
  providers: [
    WindowRef,
    {provide: RouterStateSerializer, useClass: CustomRouterStateSerializer},
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
