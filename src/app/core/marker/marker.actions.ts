import { Action } from '@ngrx/store';

import { Marker, MarkerRequestOptions } from './marker.model';


export const LOAD = '[Marker] Load';
export const LOAD_SUCCESS = '[Marker] Load Success';
export const LOAD_FAILED = '[Marker] Load Failed';

export interface LoadMarkerPayload {
  city: string;
  options?: MarkerRequestOptions;
}

export interface LoadMarkerSuccessPayload extends LoadMarkerPayload {
  markers: Marker[];
  options: MarkerRequestOptions;
}

export class LoadMarker implements Action {
  readonly type = LOAD;

  constructor(public payload: LoadMarkerPayload) {}
}

export class LoadMarkerSuccess implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: LoadMarkerSuccessPayload) {}
}

export class LoadMarkerFailed implements Action {
  readonly type = LOAD_FAILED;

  constructor(public payload: string) {}
}

export type Actions = LoadMarker | LoadMarkerSuccess | LoadMarkerFailed;
