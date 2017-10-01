import { inject, TestBed } from '@angular/core/testing';

import { WindowRef } from './window.service';


describe('WindowRef', () => {

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        WindowRef
      ]
    });

  });

  it('should instantiate correctly', inject([WindowRef], (windowRefService: WindowRef) => {

    expect(windowRefService instanceof WindowRef).toBeTruthy();

  }));

  it('should return the global browser window object', inject([WindowRef], (windowRefService: WindowRef) => {

    expect(windowRefService.nativeWindow).toBe(window);

  }));

});
