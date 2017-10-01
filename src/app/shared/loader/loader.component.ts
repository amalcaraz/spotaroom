import { ChangeDetectionStrategy, Component, Input } from '@angular/core';


@Component({
  selector: 'sar-loader',
  templateUrl: 'loader.component.html',
  styleUrls: ['loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent {

  @Input() loading: boolean;

}
