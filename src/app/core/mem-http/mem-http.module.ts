import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MemHttpService } from './mem-http.service';


@NgModule({
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(MemHttpService, {
      // TODO: Problems with AOT when I use environment variables
      host: 'https://staging.spotahome.com',
      apiBase: 'api/public/listings/search',
      passThruUnknownUrl: true,
      delay: 500
    } as any)
  ],
  exports: [
    HttpClientModule
  ]
})
export class MemHttpModule {
}
