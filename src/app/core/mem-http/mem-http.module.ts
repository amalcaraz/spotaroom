import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MemHttpService } from './mem-http.service';
import { environment } from '../../../environments/environment';


@NgModule({
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(MemHttpService, {
      host: environment.settings.marker.host,
      apiBase: environment.settings.marker.base.slice(1),
      passThruUnknownUrl: true,
      delay: 700
    })
  ],
  exports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule
  ]
})
export class MemHttpModule {
}
