import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/observable/of';

import { LOAD, LoadMarker, LoadMarkerFailed, LoadMarkerPayload, LoadMarkerSuccess } from './marker.actions';
import { MarkerService } from './marker.service';
import { MarkerResponse } from './marker.model';


@Injectable()
export class MarkerEffects {

  @Effect()
  load$: Observable<Action> = this._actions$
    .ofType<LoadMarker>(LOAD)
    .map((action: LoadMarker) => action.payload)
    .switchMap((payload: LoadMarkerPayload) => {

      // Next load action have to cancel the current one if it has not been finished
      const nextLoad$ = this._actions$.ofType(LOAD).skip(1);

      return this._markerService
        .getByCity(payload.city, payload.options)
        .takeUntil(nextLoad$)
        .map((marker: MarkerResponse) => new LoadMarkerSuccess({city: payload.city, options: payload.options, markers: marker.data}))
        .catch((err) => Observable.of(new LoadMarkerFailed(err)));
    });

  constructor(private _actions$: Actions,
              private _markerService: MarkerService) {
  }
}
