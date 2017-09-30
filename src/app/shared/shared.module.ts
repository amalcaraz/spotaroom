import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DropdownModule } from './dropdown/dropdown.module';
import { LoaderModule } from './loader/loader.module';
import { DownloadJsonModule } from './download-json/download-json.module';


@NgModule({
  exports: [
    CommonModule,
    NgbModule,
    DropdownModule,
    LoaderModule,
    DownloadJsonModule
  ]
})
export class SharedModule {
}
