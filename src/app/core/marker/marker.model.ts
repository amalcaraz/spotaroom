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
