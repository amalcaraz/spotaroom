import { NgModule } from '@angular/core';

import { CitySideNavComponent } from './city-sidenav.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    CitySideNavComponent
  ],
  exports: [
    CitySideNavComponent
  ]
})
export class CitySideNavModule {
}
