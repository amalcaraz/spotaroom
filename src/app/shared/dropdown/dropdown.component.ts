import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'sar-dropdown',
  templateUrl: 'dropdown.component.html',
  styleUrls: ['dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent {

  @Input() id: string;
  @Input() classes = 'btn-primary';
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
