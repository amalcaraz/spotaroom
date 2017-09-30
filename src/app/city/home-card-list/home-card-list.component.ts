import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { HomeCardResponse } from '../../core/homecard/homecard.model';


@Component({
  selector: 'sar-home-card-list',
  templateUrl: 'home-card-list.component.html',
  styleUrls: ['home-card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeCardListComponent {

  @Input() homeCards: HomeCardResponse;

}
