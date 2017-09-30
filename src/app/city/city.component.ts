import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { HomeCard } from '../core/homecard/homecard.model';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { RouterReducerState } from '@ngrx/router-store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';

import { RouterState } from '../core/core.reducer';
import { getRouterState } from '../core/core.selectors';
import { getSelectedFilter } from './city.selectors';
import { LoadHomeCard } from '../core/homecard/homecard.actions';
import { getAll, getLoading } from '../core/homecard/homecard.selectors';


@Component({
  selector: 'sar-city',
  templateUrl: 'city.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class CityComponent implements OnDestroy {

  loading$: Observable<boolean>;
  homeCards$: Observable<HomeCard[]>;

  private _loadSubscription: Subscription;

  constructor(private _store: Store<any>) {

    // Dispatches a LOAD action to the store every time the city param or filters change in order to load new homeCards
    this._loadSubscription = Observable
      .combineLatest(
        this._store.select(getRouterState),
        this._store.select(getSelectedFilter),
        (routerState: RouterReducerState<RouterState>, selectedFilter: string) => new LoadHomeCard({city: routerState.state.params['city']})
      )
      .subscribe(this._store);

    // Listen to changes in the store
    this.loading$ = this._store.select(getLoading);
    this.homeCards$ = this._store.select(getAll);

  }

  ngOnDestroy() {

    this._loadSubscription.unsubscribe();

  }

}
