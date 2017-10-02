import { Action } from '@ngrx/store';

import { Marker, MarkerRequestOptions } from './marker.model';


export const LOAD = '[Marker] Load';
export const ALREADY_LOADED = '[Marker] Already Loaded';
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

  constructor(public payload: LoadMarkerPayload) {
  }
}

export class MarkerAlreadyLoaded implements Action {
  readonly type = ALREADY_LOADED;

  constructor() {
  }
}

export class LoadMarkerSuccess implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: LoadMarkerSuccessPayload) {
  }
}

export class LoadMarkerFailed implements Action {
  readonly type = LOAD_FAILED;

  constructor(public payload: string) {
  }
}

export type Actions = LoadMarker | MarkerAlreadyLoaded | LoadMarkerSuccess | LoadMarkerFailed;
