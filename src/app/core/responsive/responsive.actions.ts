import { Action } from '@ngrx/store';

export const WIDTH_CHANGE       = '[theme] Width change';


export class WidthChangeResponsiveAction implements Action {
  readonly type = WIDTH_CHANGE;

  constructor(public payload: number) {
  }
}


export type Actions
  = WidthChangeResponsiveAction;
