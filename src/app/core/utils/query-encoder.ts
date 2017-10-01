import { QueryEncoder } from '@angular/http';

export class SarQueryEncoder extends QueryEncoder {

  encodeKey(k: string): string {

    return k;

  }

  encodeValue(v: string): string {

    return encodeURIComponent(v);

  }
}
