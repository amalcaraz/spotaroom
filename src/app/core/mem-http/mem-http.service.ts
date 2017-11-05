import { HttpParams } from '@angular/common/http';
import { getStatusText, InMemoryDbService, RequestInfo, ResponseOptions, STATUS } from 'angular-in-memory-web-api';

import { MARKER, MarkerResponseWithIdAndType } from './marker/marker.mock';
import { HOMECARD } from './homecard/homecard.mock';
import { HomeCard, HomeCardResponse } from '../homecard/homecard.model';
import { MarkerResponse } from '../marker/marker.model';


export class MemHttpService implements InMemoryDbService {

  private _homecards_ids: any = HOMECARD;
  private _markers: any = MARKER;

  createDb() {

    return {
      markers: this._markers,
      homecards_ids: this._homecards_ids
    };

  }

  // HTTP GET interceptor
  get(reqInfo: RequestInfo) {

    const collectionName = reqInfo.collectionName;

    switch (collectionName) {

      case 'markers':
        return this.getMarkersByIdAndType(reqInfo);

      case 'homecards_ids':
        return this.getHomecardsById(reqInfo);

      default:
        return undefined;

    }

  }

  // HTTP GET interceptor handles requests for markers
  private getMarkersByIdAndType(reqInfo: RequestInfo): ResponseOptions {

    return reqInfo.utils.createResponse$(() => {

      console.log('HTTP GET override :: filtering by type[]');

      const reqParams: HttpParams = (reqInfo.req as any).params;
      const collection: MarkerResponseWithIdAndType[] = [...this._markers];
      const id: string = reqInfo.id;
      const type: string = reqParams.get('type[]');

      const data: MarkerResponse = collection
        .find((markerResponse: MarkerResponseWithIdAndType) => markerResponse.id === id && (!type || markerResponse.type === type));

      return this.makeResponseOptions(data, reqInfo);

    });
  }

  // HTTP GET interceptor handles requests for homecards_ids
  private getHomecardsById(reqInfo: RequestInfo): ResponseOptions {

    return reqInfo.utils.createResponse$(() => {

      console.log('HTTP GET override :: filtering by ids[]');

      const reqParams: HttpParams = (reqInfo.req as any).params;
      const collection: HomeCardResponse = {...this._homecards_ids};
      const ids: string[] = reqParams.getAll('ids[]');

      debugger;

      const filteredHomeCards: HomeCard[] = !ids
        ? []
        : collection.data.homecards.filter((homeCard: HomeCard) => ids.indexOf(homeCard.id.toString()) !== -1);

      const data: HomeCardResponse = {...collection, data: {homecards: filteredHomeCards}};

      return this.makeResponseOptions(data, reqInfo);

    });
  }

  private makeResponseOptions(data: any, {headers, url, utils}: RequestInfo): ResponseOptions {

    const dataEncapsulation: boolean = utils.getConfig().dataEncapsulation;

    const options: ResponseOptions = data ?
      {
        body: dataEncapsulation ? {data} : data,
        status: STATUS.OK
      } :
      {
        body: {error: `not found`},
        status: STATUS.NOT_FOUND
      };

    options.statusText = getStatusText(options.status);
    options.headers = headers;
    options.url = url;

    return options;

  }

}
