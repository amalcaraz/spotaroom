import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';
import { SharedModule } from '../shared/shared.module';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import { LogoComponent } from './logo/logo.component';


@NgModule({
  imports: [
    RouterModule,
    SharedModule
  ],
  declarations: [
    HeaderComponent,
    MenuButtonComponent,
    LogoComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule {
}
