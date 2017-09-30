import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import 'rxjs/add/operator/combineLatest';


@Component({
  selector: 'sar-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeCardComponent {

  @Input() homeCard: string;

}
