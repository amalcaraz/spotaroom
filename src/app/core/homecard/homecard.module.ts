import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducer } from './homecard.reducer';
import { HomeCardService } from './homecard.service';
import { HomeCardEffects } from './homecard.effects';


@NgModule({
  imports: [
    StoreModule.forFeature('homecard', reducer),
    EffectsModule.forFeature([HomeCardEffects])
  ],
  providers: [
    HomeCardService
  ]
})
export class HomeCardModule {
}
