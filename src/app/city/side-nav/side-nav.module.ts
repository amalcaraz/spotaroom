import { NgModule } from '@angular/core';

import { SideNavComponent } from './side-nav.component';


@NgModule({
  declarations: [
    SideNavComponent
  ],
  exports: [
    SideNavComponent
  ]
})
export class SideNavModule {
}
