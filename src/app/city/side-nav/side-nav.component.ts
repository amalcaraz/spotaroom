import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'sar-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavComponent {
}
