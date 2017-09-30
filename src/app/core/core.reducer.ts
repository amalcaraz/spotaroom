import * as fromRouter from '@ngrx/router-store';
import { RouterStateSerializer } from '@ngrx/router-store';
import { ActivatedRouteSnapshot, Params, RouterStateSnapshot } from '@angular/router';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../../environments/environment';


export interface RouterState {
  url: string;
  params: Params,
  queryParams: Params;
}

export class CustomRouterStateSerializer implements RouterStateSerializer<RouterState> {

  serialize(routerState: RouterStateSnapshot): RouterState {
    const {url} = routerState;
    const queryParams = routerState.root.queryParams;

    let state: ActivatedRouteSnapshot  = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    const params: Params = state.params;

    return {url, queryParams, params};
  }

}

export interface State {
  routerReducer: fromRouter.RouterReducerState<RouterState>;
}

export const reducers: ActionReducerMap<State> = {
  routerReducer: fromRouter.routerReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [storeFreeze]
  : [];
