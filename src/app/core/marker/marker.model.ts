export interface Marker {
  id: number;
  adId: number;
  coord: [number, number];
  relevance: number;
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
}

export const DEFAULT_MARKER_FILTER = 'all';

export const DEFAULT_MARKER_OPTIONS: MarkerRequestOptions = {
  filter: DEFAULT_MARKER_FILTER
};
