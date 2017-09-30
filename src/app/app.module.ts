import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
