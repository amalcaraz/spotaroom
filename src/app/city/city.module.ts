import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { CityRoutingModule } from './city-routing.module';
import { CityComponent } from './city.component';
import { CitySideNavModule } from './city-sidenav/city-sidenav.module';
import { HomeCardListModule } from './home-card-list/home-card-list.module';
import { reducer } from './city.reducer';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    SharedModule,
    HomeCardListModule,
    CitySideNavModule,
    CityRoutingModule,
    StoreModule.forFeature('city', reducer)
  ],
  declarations: [CityComponent]
})
export class CityModule {
}
