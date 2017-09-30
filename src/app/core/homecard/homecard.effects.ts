import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
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
import { HomeCard } from './homecard.model';


@Injectable()
export class HomeCardEffects {

  @Effect()
  load$: Observable<Action> = this.actions$
    .ofType<LoadHomeCard>(LOAD)
    .debounceTime(1000, async)
    .map((action: LoadHomeCard) => action.payload)
    .switchMap((payload: LoadHomeCardPayload) => {

      // Next load action have to cancel the current one if it has not been finished
      const nextLoad$ = this.actions$.ofType(LOAD).skip(1);

      return this._homeCardService
        .get(payload.city, payload.options)
        .takeUntil(nextLoad$)
        .map((homeCards: HomeCard[]) => new LoadHomeCardSuccess(homeCards))
        .catch((err) => Observable.of(new LoadHomeCardFailed(err)));
    });

  constructor(private actions$: Actions,
              private _homeCardService: HomeCardService) {
  }
}
