import { Action } from '@ngrx/store';

import { HomeCard } from './homecard.model';
import { HomeCardRequestFilters } from './homecard.service';


export const LOAD = '[HomeCard] Load';
export const LOAD_SUCCESS = '[HomeCard] Load Success';
export const LOAD_FAILED = '[HomeCard] Load Failed';

export interface LoadHomeCardPayload {
  city: string;
  filters?: HomeCardRequestFilters;
}

export class LoadHomeCard implements Action {
  readonly type = LOAD;

  constructor(public payload: LoadHomeCardPayload) {}
}

export class LoadHomeCardSuccess implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: HomeCard[]) {}
}

export class LoadHomeCardFailed implements Action {
  readonly type = LOAD_FAILED;

  constructor(public payload: string) {}
}

export type Actions = LoadHomeCard | LoadHomeCardSuccess | LoadHomeCardFailed;
