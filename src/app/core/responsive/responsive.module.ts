import { APP_BOOTSTRAP_LISTENER, NgModule } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

import { WidthChangeResponsiveAction } from './responsive.actions';
import { reducer, State } from './responsive.reducer';
import { WindowRef } from '../window/window.service';


export function setupThemeStore(_store: Store<State>, _windowRef: WindowRef) {
  return () => {

    _store.dispatch(new WidthChangeResponsiveAction(_windowRef.nativeWindow.innerWidth));

    Observable
      .fromEvent(_windowRef.nativeWindow, 'resize', {passive: true}, (e) => e.target['innerWidth'])
      .debounceTime(100)
      .map((width) => new WidthChangeResponsiveAction(width))
      .subscribe(_store);

  };
}

@NgModule({
  imports: [
    StoreModule.forFeature('responsive', reducer)
  ],
  providers: [
    {
      provide: APP_BOOTSTRAP_LISTENER,
      deps: [Store, WindowRef],
      useFactory: setupThemeStore,
      multi: true
    }
  ]
})
export class ResponsiveModule {
}
