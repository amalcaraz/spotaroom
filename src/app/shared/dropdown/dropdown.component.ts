import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'sar-dropdown',
  templateUrl: 'dropdown.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent {

  @Input() id: string;
  @Input() options: string[];
  @Input() selected: string;
  @Output() selectedChange: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  onClickOption(option: string) {

    this.selected = option;
    this.selectedChange.emit(option);

  }

}
