import { createFeatureSelector } from '@ngrx/store';

import { State } from './responsive.reducer';


// Public selectors
export const getResponsiveState = createFeatureSelector<State>('responsive');
