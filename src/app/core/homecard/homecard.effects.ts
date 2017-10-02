import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { async } from 'rxjs/scheduler/async';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/observable/of';

import { LOAD, LoadHomeCard, LoadHomeCardFailed, LoadHomeCardPayload, LoadHomeCardSuccess } from './homecard.actions';
import { HomeCardService } from './homecard.service';
import {
  LOAD_FAILED as LOAD_MARKER_FAILED,
  LOAD_SUCCESS as LOAD_MARKER_SUCCESS,
  LoadMarker,
  LoadMarkerFailed,
  LoadMarkerSuccess
} from '../marker/marker.actions';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/concat';
import { HomeCard } from './homecard.model';
import { getAllMarkersFiltered } from '../marker/marker.selectors';
import { Marker, MarkerId } from '../marker/marker.model';


@Injectable()
export class HomeCardEffects {

  @Effect()
  load$: Observable<Action> = this._actions$
    .ofType<LoadHomeCard>(LOAD)
    .debounceTime(200, async)
    .map((action: LoadHomeCard) => action.payload)
    .switchMap((payload: LoadHomeCardPayload) => Observable
      .concat(
        Observable.of(new LoadMarker(payload)),
        this._actions$
          .filter((action: Action) => action.type === LOAD_MARKER_SUCCESS || action.type === LOAD_MARKER_FAILED)
          .take(1)
          .switchMap((action: LoadMarkerSuccess | LoadMarkerFailed) => this._store.select(getAllMarkersFiltered(payload.city, payload.options)))
          .map((markers: Marker[]) => markers.map((marker: Marker) => marker.id))
          .switchMap((markersIds: MarkerId[]) => {

            // Next load action have to cancel the current one if it has not been finished
            const nextLoad$ = this._actions$.ofType(LOAD).skip(1);

            return this._homeCardService
              .get(markersIds, payload.options)
              .takeUntil(nextLoad$)
              .map((homeCards: HomeCard[]) => new LoadHomeCardSuccess(homeCards))
              .catch((err) => Observable.of(new LoadHomeCardFailed(err)));

          })
      )
    );

  constructor(private _actions$: Actions,
              private _store: Store<any>,
              private _homeCardService: HomeCardService) {
  }
}
