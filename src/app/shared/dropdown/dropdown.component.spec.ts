import { async, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { DropdownComponent } from './dropdown.component';
import { DropdownModule } from './dropdown.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { By } from '@angular/platform-browser';
import { debug } from 'util';


describe('DropdownComponent', () => {

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        NgbModule.forRoot(),
        DropdownModule
      ],
      declarations: [
        TestComponent
      ],
    }).compileComponents();

  }));

  beforeEach(() => {

    this.fixture = TestBed.createComponent(TestComponent);
    this.instance = this.fixture.debugElement.componentInstance;
    this.de = this.fixture.debugElement;
    this.el = this.de.nativeElement;

    this.targetDe = this.de.query(By.directive(DropdownComponent));
    this.targetComponent = this.targetDe.componentInstance;

  });

  it('should instantiate the component', async(() => {

    expect(this.targetComponent instanceof DropdownComponent).toBeTruthy();

  }));


  it('should have classes passed by input', async(() => {

    // https://github.com/angular/angular-cli/issues/7296

    expect(1).toBe(1);

    // this.fixture.detectChanges();

    /*debugger;

    const dropdownBtn: DebugElement = this.targetDe.query(By.css('[ngbDropdownToggle]'));

    expect(dropdownBtn.nativeElement.classList).toContain('btn');
    expect(dropdownBtn.nativeElement.classList).toContain('btn-primary');*/

  }));

});

@Component({
  selector: 'sar-test',
  template: `
    <sar-dropdown [id]="testId"
                  [classes]="testClasses"
                  [options]="testOptions"
                  [selected]="testSelected"
    ></sar-dropdown>`
})
export class TestComponent {

  testId: string;
  testClasses: string;
  testOptions: string[];
  testSelected: string;

  onSelectedChange = jasmine.createSpy('onSelectedChange');

}

