import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { HomeCard } from '../../../core/homecard/homecard.model';


@Component({
  selector: 'sar-home-card',
  templateUrl: 'home-card.component.html',
  styleUrls: ['home-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeCardComponent {

  @Input() homeCard: HomeCard;

}
