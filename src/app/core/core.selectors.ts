import * as fromRouter from '@ngrx/router-store';
import { createFeatureSelector } from '@ngrx/store';

import { RouterState } from './core.reducer';


export const getRouterState = createFeatureSelector<fromRouter.RouterReducerState<RouterState>>('routerReducer');
