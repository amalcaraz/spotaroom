import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DownloadJsonComponent } from './download-json.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DownloadJsonComponent
  ],
  exports: [
    DownloadJsonComponent
  ],
})
export class DownloadJsonModule {
}
