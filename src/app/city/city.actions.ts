import { Action } from '@ngrx/store';


export const SET_FILTER = '[City] Set Filter';
export const SET_ORDER = '[City] Set Order';

export class SetFilter implements Action {
  readonly type = SET_FILTER;

  constructor(public payload: string) {}
}

export class SetOrder implements Action {
  readonly type = SET_ORDER;

  constructor(public payload: string) {}
}

export type Actions = SetFilter | SetOrder;
