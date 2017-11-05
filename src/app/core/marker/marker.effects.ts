import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/observable/of';

import {
  MarkerAlreadyLoaded,
  LOAD,
  LoadMarker,
  LoadMarkerFailed,
  LoadMarkerPayload,
  LoadMarkerSuccess
} from './marker.actions';
import { MarkerService } from './marker.service';
import { Marker, MarkerResponse } from './marker.model';
import { getAllMarkersFiltered } from './marker.selectors';


@Injectable()
export class MarkerEffects {

  @Effect()
  load$: Observable<Action> = this._actions$
    .ofType<LoadMarker>(LOAD)
    .map((action: LoadMarker) => action.payload)
    .switchMap((payload: LoadMarkerPayload) => {

      return this
        .checkIfMarkersAreAlreadyLoaded(payload)
        .switchMap((isLoaded: boolean) => {

          if (!isLoaded) {

            // Next load action have to cancel the current one if it has not been finished
            const nextLoad$ = this._actions$.ofType(LOAD).skip(1);

            return this._markerService
              .getByCity(payload.city, payload.options)
              .takeUntil(nextLoad$)
              .map((marker: MarkerResponse) => new LoadMarkerSuccess({
                city: payload.city,
                options: payload.options,
                markers: marker.data
              }))
              .catch((err) => Observable.of(new LoadMarkerFailed(err)));

          } else {

            return Observable.of<Action>(new MarkerAlreadyLoaded());

          }

        });
    });

  private checkIfMarkersAreAlreadyLoaded(payload: LoadMarkerPayload): Observable<boolean> {

    return this._store
      .select(getAllMarkersFiltered(payload.city, payload.options))
      .map((markers: Marker[]) => markers.length > 0)
      .take(1) as Observable<boolean>;

  }

  constructor(private _actions$: Actions,
              private _store: Store<any>,
              private _markerService: MarkerService) {
  }
}
