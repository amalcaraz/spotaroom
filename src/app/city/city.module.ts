import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { CityRoutingModule } from './city-routing.module';
import { CityComponent } from './city.component';
import { SideNavModule } from './side-nav/side-nav.module';
import { HomeCardListModule } from './home-card-list/home-card-list.module';
import { reducer } from './city.reducer';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    SharedModule,
    HomeCardListModule,
    SideNavModule,
    CityRoutingModule,
    StoreModule.forFeature('city', reducer)
  ],
  declarations: [CityComponent]
})
export class CityModule {
}
