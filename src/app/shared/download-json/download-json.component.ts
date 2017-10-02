import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'sar-download-json',
  templateUrl: 'download-json.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DownloadJsonComponent {

  @Input() name = 'Download JSON';
  @Input() classes = 'btn-primary';
  @Input() fileName = 'data.json';
  @Input() disabled = false;
  @Input() data: {};

  @ViewChild('hiddenAnchor') hiddenAnchor: ElementRef;

  url: SafeUrl;

  constructor(private _sanitizer: DomSanitizer) {
  }

  generateFileUrl() {

    const serializedJson: string = JSON.stringify(this.data, undefined, 2);
    this.url = this._sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(serializedJson));

    // Launch the download on the next event loop task to let angular do one change detection cycle
    setTimeout(() => {
      this.hiddenAnchor.nativeElement.click();
    }, 0);

  }

}
