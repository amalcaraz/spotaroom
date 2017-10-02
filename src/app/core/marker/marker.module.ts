import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducer } from './marker.reducer';
import { MarkerService } from './marker.service';
import { MarkerEffects } from './marker.effects';


@NgModule({
  imports: [
    StoreModule.forFeature('marker', reducer),
    EffectsModule.forFeature([MarkerEffects])
  ],
  providers: [
    MarkerService
  ]
})
export class MarkerModule {
}
