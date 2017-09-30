import { NgModule } from '@angular/core';

import { CityRoutingModule } from './city-routing.module';
import { CityComponent } from './city.component';
import { SideNavModule } from './side-nav/side-nav.module';
import { HomeCardListModule } from './home-card-list/home-card-list.module';


@NgModule({
  imports: [
    HomeCardListModule,
    SideNavModule,
    CityRoutingModule
  ],
  declarations: [CityComponent]
})
export class CityModule {
}
