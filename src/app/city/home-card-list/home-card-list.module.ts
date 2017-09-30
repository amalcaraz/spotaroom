import { NgModule } from '@angular/core';

import { HomeCardListComponent } from './home-card-list.component';
import { SharedModule } from '../../shared/shared.module';
import { HomeCardComponent } from './home-card/home-card.component';


@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    HomeCardListComponent,
    HomeCardComponent
  ],
  exports: [
    HomeCardListComponent
  ]
})
export class HomeCardListModule {
}
