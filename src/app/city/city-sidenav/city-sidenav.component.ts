import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { RouterReducerState } from '@ngrx/router-store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/take';
import * as format from 'string-format';

import {
getCities,
getFilters,
getHomeCardsFiltered,
getOrders,
getSelectedFilter,
getSelectedOrder
} from '../city.selectors';
import { State } from '../city.reducer';
import { SetFilter, SetOrder } from '../city.actions';
import { HomeCard } from '../../core/homecard/homecard.model';
import { getRouterState } from '../../core/core.selectors';
import { RouterState } from '../../core/core.reducer';
import { getLoading } from '../../core/homecard/homecard.selectors';
import { SettingsService } from '../../core/settings/settings.service';


@Component({
  selector: 'sar-city-sidenav',
  templateUrl: 'city-sidenav.component.html',
  styleUrls: ['city-sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CitySideNavComponent {

  cities$: Observable<string[]>;
  filters$: Observable<string[]>;
  orders$: Observable<string[]>;

  selectedCity$: Observable<string>;
  selectedFilter$: Observable<string>;
  selectedOrder$: Observable<string>;

  homeCardLoading$: Observable<boolean>;
  currentHomeCard$: Observable<HomeCard[]>;
  jsonFileName$: Observable<string>;

  constructor(private _store: Store<State>,
              private _router: Router,
              private _settingsService: SettingsService) {

    this.cities$ = this._store.select(getCities);
    this.filters$ = this._store.select(getFilters);
    this.orders$ = this._store.select(getOrders);

    // TODO: get the city param from CityState and load it in the store by DataResolver or CanActivateGuard
    this.selectedCity$ = this._store
      .select(getRouterState)
      .map((routerState: RouterReducerState<RouterState>) => routerState.state.params['city']);

    this.selectedFilter$ = this._store.select(getSelectedFilter);
    this.selectedOrder$ = this._store.select(getSelectedOrder);

    this.homeCardLoading$ = this._store.select(getLoading);
    this.currentHomeCard$ = this._store.select(getHomeCardsFiltered);

    this.jsonFileName$ = Observable
      .combineLatest(
        this.selectedCity$,
        this.selectedFilter$,
        this.selectedOrder$,
        (city: string, filter: string, order: string) => format(this._settingsService.get('jsonFileName'), city, filter, order)
      );

  }

  onCityChange(city: string) {

    this._router.navigate([city]);

  }

  onFilterChange(filter: string) {

    this._store.dispatch(new SetFilter(filter));

  }

  onOrderChange(order: string) {

    this._store.dispatch(new SetOrder(order));

  }

}
