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
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/filter';

import {
  HomeCardAlreadyLoaded,
  LOAD,
  LoadHomeCard,
  LoadHomeCardFailed,
  LoadHomeCardPayload,
  LoadHomeCardSuccess
} from './homecard.actions';
import { HomeCardService } from './homecard.service';
import {
  ALREADY_LOADED as MARKER_ALREADY_LOADED,
  LOAD_FAILED as MARKER_LOAD_FAILED,
  LOAD_SUCCESS as MARKER_LOAD_SUCCESS,
  LoadMarker,
  LoadMarkerFailed,
  LoadMarkerSuccess,
  MarkerAlreadyLoaded
} from '../marker/marker.actions';
import { HomeCard } from './homecard.model';
import { getAllMarkersFiltered } from '../marker/marker.selectors';
import { Marker, MarkerId } from '../marker/marker.model';
import { getAllHomeCardsFiltered } from './homecard.selectors';


@Injectable()
export class HomeCardEffects {

  @Effect()
  load$: Observable<Action> = this._actions$
    .ofType<LoadHomeCard>(LOAD)
    .debounceTime(200, async)
    .map((action: LoadHomeCard) => action.payload)
    .switchMap((payload: LoadHomeCardPayload) => Observable.merge(
      // Ok, this is a little complicated :S, but is the way the effects works (as observation flows) :)
      // In resume, every time we receive an action of kind "LoadHomeCard", we are dispatching two new actions to the store,
      // the first one is "LoadMarker" that loads the markers that the "HomeCardService" needs to retrieve the HomeCards,
      // and the second one is "LoadHomeCardSuccess" that store the fetched information,
      // but this one is beeing delayed, until "LoadMarkerSuccess", "AlreadyLoaded" or "LoadMarkerFailed" are dispatched...
      this
        .waitUntilMarkersAreLoaded(payload)
        .switchMap((markersIds: MarkerId[]) => {

          return this
            .checkIfHomeCardsAreAlreadyLoaded(markersIds)
            .switchMap((isLoaded: boolean) => {

              if (!isLoaded) {

                // Next load action have to cancel the current one if it has not been finished
                const nextLoad$ = this._actions$.ofType(LOAD).skip(1);

                return this._homeCardService
                  .get(markersIds, payload.options)
                  .takeUntil(nextLoad$)
                  .map((homeCards: HomeCard[]) => new LoadHomeCardSuccess(homeCards))
                  .catch((err) => Observable.of(new LoadHomeCardFailed(err)));


              } else {

                return Observable.of<Action>(new HomeCardAlreadyLoaded());

              }

            });

        }),
      Observable.of(new LoadMarker(payload))
      )
    );

  private checkIfHomeCardsAreAlreadyLoaded(markersIds: MarkerId[]): Observable<boolean> {

    return this._store
      .select(getAllHomeCardsFiltered(markersIds))
      .map((markers: HomeCard[]) => markers.length === markersIds.length)
      .take(1) as Observable<boolean>;

  }

  private waitUntilMarkersAreLoaded(payload: LoadHomeCardPayload): Observable<MarkerId[]> {

    return this._actions$
      .filter((action: Action) => action.type === MARKER_LOAD_SUCCESS || action.type === MARKER_ALREADY_LOADED || action.type === MARKER_LOAD_FAILED)
      .switchMap((action: LoadMarkerSuccess | MarkerAlreadyLoaded | LoadMarkerFailed) => this._store.select(getAllMarkersFiltered(payload.city, payload.options)))
      .map((markers: Marker[]) => markers.map((marker: Marker) => marker.id));

  }

  constructor(private _actions$: Actions,
              private _store: Store<any>,
              private _homeCardService: HomeCardService) {
  }
}
