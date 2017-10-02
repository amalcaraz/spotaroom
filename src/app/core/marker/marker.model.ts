import { CityId } from '../../app.model';


export type MarkerId = number;

export interface Marker {
  id: MarkerId;
  adId: number;
  coord: [number, number];
  relevance: number;
  city?: CityId;
  filter?: string;
}

export interface MarkerResponse {
  ok: boolean;
  data: Marker[];
  paginator: {
    pageNumber: number;
    count: number;
    itemCountPerPage: number;
    pages: number;
  };
}

export interface MarkerRequestOptions {
  filter?: string;
  count?: number;
}
