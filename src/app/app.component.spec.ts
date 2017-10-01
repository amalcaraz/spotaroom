import { async, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';


describe('AppComponent', () => {

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        HeaderStubComponent
      ],
    }).compileComponents();

  }));

  beforeEach(() => {

    this.fixture = TestBed.createComponent(AppComponent);
    this.instance = this.fixture.debugElement.componentInstance;
    this.de = this.fixture.debugElement;
    this.el = this.de.nativeElement;

  });

  it('should create the app', async(() => {

    expect(this.instance).toBeTruthy();

  }));

  it(`should render the header component`, async(() => {

    expect(this.el.textContent).toContain('header-template');

  }));

});

@Component({
  selector: 'sar-header',
  template: 'header-template'
})
export class HeaderStubComponent {
}

