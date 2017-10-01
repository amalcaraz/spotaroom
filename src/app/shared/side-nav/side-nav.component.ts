import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { State } from './side-nav.reducer';
import { ResponsiveBreakpoints, State as ResponsiveState } from '../../core/responsive/responsive.reducer';
import { getSideNavStateById } from './side-nav.selectors';
import { Destroy, Init } from './side-nav.actions';
import { getResponsiveState } from '../../core/responsive/responsive.selectors';
import { ResponsivePrefix } from '../../core/responsive/responsive.model';


@Component({
  selector: 'sar-side-nav',
  templateUrl: 'side-nav.component.html',
  styleUrls: ['side-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavComponent implements OnInit, OnDestroy {

  @Input() id: string;

  @Input()
  set fixedBreakpoint(value: ResponsivePrefix) {
    this._fixedBreakpoint = ResponsiveBreakpoints[value];
  }

  _fixedBreakpoint: number;
  isOpen$: Observable<boolean>;
  responsive$: Observable<ResponsiveState>;

  constructor(private _store: Store<State>) {
  }

  ngOnInit() {

    // Init new side-nav id in the store
    this._store.dispatch(new Init(this.id));

    // Subscribe to changes in the state of that side-nav id
    this.isOpen$ = this._store.select(getSideNavStateById(this.id));

    // Subscribe to changes in the responsive state
    this.responsive$ = this._store.select(getResponsiveState);

  }

  ngOnDestroy() {

    // Destroy this side-nav id in the store
    this._store.dispatch(new Destroy(this.id));

  }
}
