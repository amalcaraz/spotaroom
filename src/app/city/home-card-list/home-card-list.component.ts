import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { HomeCardService } from '../../core/homecard/homecard.service';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/combineLatest';

import { RouterState, State } from '../../core/core.reducer';
import { getRouterState } from '../../core/core.selectors';
import { RouterReducerState } from '@ngrx/router-store';
import { HomeCardResponse } from '../../core/homecard/homecard.model';


@Component({
  selector: 'sar-home-card-list',
  templateUrl: './home-card-list.component.html',
  styleUrls: ['./home-card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeCardListComponent implements OnDestroy {

  model: HomeCardResponse;
  private _modelSubscription: Subscription;

  constructor(private _store: Store<State>,
              private _homeCardService: HomeCardService,
              private _changeDetectorRef: ChangeDetectorRef) {

    this._modelSubscription = this._store
      .select(getRouterState)
      .switchMap((routerState: RouterReducerState<RouterState>) => this._homeCardService.get(routerState.state.params['city']))
      .subscribe((model: HomeCardResponse) => {

        this.model = model;
        this._changeDetectorRef.markForCheck();

      });

  }

  ngOnDestroy() {

    this._modelSubscription.unsubscribe();

  }

}
