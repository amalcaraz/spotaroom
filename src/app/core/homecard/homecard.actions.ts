import { Action } from '@ngrx/store';

import { HomeCard, HomeCardRequestOptions } from './homecard.model';


export const LOAD = '[HomeCard] Load';
export const ALREADY_LOADED = '[HomeCard] Already Loaded';
export const LOAD_SUCCESS = '[HomeCard] Load Success';
export const LOAD_FAILED = '[HomeCard] Load Failed';

export interface LoadHomeCardPayload {
  city: string;
  options?: HomeCardRequestOptions;
}

export class LoadHomeCard implements Action {
  readonly type = LOAD;

  constructor(public payload: LoadHomeCardPayload) {
  }
}

export class HomeCardAlreadyLoaded implements Action {
  readonly type = ALREADY_LOADED;

  constructor() {
  }
}

export class LoadHomeCardSuccess implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: HomeCard[]) {
  }
}

export class LoadHomeCardFailed implements Action {
  readonly type = LOAD_FAILED;

  constructor(public payload: string) {
  }
}

export type Actions = LoadHomeCard | HomeCardAlreadyLoaded | LoadHomeCardSuccess | LoadHomeCardFailed;
