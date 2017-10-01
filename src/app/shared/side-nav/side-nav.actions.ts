import { Action } from '@ngrx/store';


export const INIT = '[SideNav] Init';
export const DESTROY = '[SideNav] Destroy';
export const TOGGLE = '[SideNav] Toggle';

export class Init implements Action {
  readonly type = INIT;

  constructor(public payload: string) {}
}

export class Destroy implements Action {
  readonly type = DESTROY;

  constructor(public payload: string) {}
}

export class Toggle implements Action {
  readonly type = TOGGLE;

  constructor(public payload: string) {}
}

export type Actions = Init | Destroy | Toggle;
