import { async, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader.component';


describe('LoaderComponent', () => {

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        CommonModule
      ],
      declarations: [
        TestComponent,
        LoaderComponent
      ],
    }).compileComponents();

  }));

  beforeEach(() => {

    this.fixture = TestBed.createComponent(TestComponent);
    this.instance = this.fixture.debugElement.componentInstance;
    this.de = this.fixture.debugElement;
    this.el = this.de.nativeElement;

    this.targetDe = this.de.query(By.directive(LoaderComponent));
    this.targetComponent = this.targetDe.componentInstance;

  });

  it('should instantiate the component', async(() => {

    expect(this.targetComponent instanceof LoaderComponent).toBeTruthy();

  }));


  it('should print the loader if the "loading" input is evaluated as true', async(() => {

    this.fixture.detectChanges();

    // Print the loaderAnimation and not the content
    let loaderAnimationDe: DebugElement = this.targetDe.query(By.css('.circular-loader'));
    expect(loaderAnimationDe).not.toBeNull();
    expect(this.targetDe.nativeElement.textContent).not.toContain(this.instance.content);


    // Changing loading input to false
    this.instance.isLoading = false;
    this.fixture.detectChanges();


    // Print the content and not the loader
    loaderAnimationDe = this.targetDe.query(By.css('.circular-loader'));
    expect(loaderAnimationDe).toBeNull();
    expect(this.targetDe.nativeElement.textContent).toContain(this.instance.content);


  }));

});

@Component({
  selector: 'sar-test',
  template: `
    <sar-loader [loading]="isLoading">
      {{content}}
    </sar-loader>`
})
export class TestComponent {

  isLoading = true;
  content = 'content to show';

}

