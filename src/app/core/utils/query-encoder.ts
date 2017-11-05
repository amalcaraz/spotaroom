import { HttpParameterCodec, HttpUrlEncodingCodec } from '@angular/common/http';


export class SarQueryEncoder extends HttpUrlEncodingCodec implements HttpParameterCodec {

  encodeKey(k: string): string {

    return k;

  }

  encodeValue(v: string): string {

    return encodeURIComponent(v);

  }
}
