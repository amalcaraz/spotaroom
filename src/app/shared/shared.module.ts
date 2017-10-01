import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DropdownModule } from './dropdown/dropdown.module';
import { LoaderModule } from './loader/loader.module';
import { DownloadJsonModule } from './download-json/download-json.module';
import { SideNavModule } from './side-nav/side-nav.module';


@NgModule({
  exports: [
    CommonModule,
    NgbModule,
    DropdownModule,
    LoaderModule,
    DownloadJsonModule,
    SideNavModule
  ]
})
export class SharedModule {
}
