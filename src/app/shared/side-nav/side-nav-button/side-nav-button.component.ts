import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { State } from '../side-nav.reducer';
import { Toggle } from '../side-nav.actions';
import { getSideNavStateById } from '../side-nav.selectors';
import { getResponsiveState } from '../../../core/responsive/responsive.selectors';
import { ResponsivePrefix } from '../../../core/responsive/responsive.model';
import { ResponsiveBreakpoints, State as ResponsiveState } from '../../../core/responsive/responsive.reducer';


@Component({
  selector: 'sar-side-nav-button',
  templateUrl: 'side-nav-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavButtonComponent implements OnInit {

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

    // Subscribe to changes in the state of that side-nav id
    this.isOpen$ = this._store.select(getSideNavStateById(this.id));

    // Subscribe to changes in the responsive state
    this.responsive$ = this._store.select(getResponsiveState);

  }

  toggle() {

    this._store.dispatch(new Toggle(this.id));

  }
}
