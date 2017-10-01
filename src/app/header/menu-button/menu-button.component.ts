import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'sar-menu-button',
  templateUrl: 'menu-button.component.html',
  styleUrls: ['menu-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuButtonComponent {
}
