import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { SideNavComponent } from './side-nav.component';
import { reducer } from './side-nav.reducer';
import { SideNavButtonComponent } from './side-nav-button/side-nav-button.component';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('side-nav', reducer)
  ],
  declarations: [
    SideNavComponent,
    SideNavButtonComponent
  ],
  exports: [
    SideNavComponent,
    SideNavButtonComponent
  ],
})
export class SideNavModule {
}
