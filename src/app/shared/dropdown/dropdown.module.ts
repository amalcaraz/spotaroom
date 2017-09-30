import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

import { DropdownComponent } from './dropdown.component';


@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [
    DropdownComponent
  ],
  exports: [
    DropdownComponent
  ]
})
export class DropdownModule {
}
