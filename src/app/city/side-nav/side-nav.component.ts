import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/take';

import { getFilters, getHomeCardsFiltered, getOrders, getSelectedFilter, getSelectedOrder } from '../city.selectors';
import { State } from '../city.reducer';
import { SetFilter, SetOrder } from '../city.actions';
import { HomeCard } from '../../core/homecard/homecard.model';


@Component({
  selector: 'sar-side-nav',
  templateUrl: 'side-nav.component.html',
  styleUrls: ['side-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavComponent {

  filters$: Observable<string[]>;
  orders$: Observable<string[]>;
  selectedFilter$: Observable<string>;
  selectedOrder$: Observable<string>;
  currentHomeCard$: Observable<HomeCard[]>;

  constructor(private _store: Store<State>) {

    this.filters$ = this._store.select(getFilters);
    this.orders$ = this._store.select(getOrders);
    this.selectedFilter$ = this._store.select(getSelectedFilter);
    this.selectedOrder$ = this._store.select(getSelectedOrder);
    this.currentHomeCard$ = this._store.select(getHomeCardsFiltered);

  }

  onFilterChange(filter: string) {

    this._store.dispatch(new SetFilter(filter));

  }

  onOrderChange(order: string) {

    this._store.dispatch(new SetOrder(order));

  }

}
