import { MarkerId, MarkerRequestOptions } from '../marker/marker.model';

export type HomeCardId = MarkerId;

export interface HomeCard {
  id: HomeCardId;
  features: {
    [featureId: string]: boolean;
  };
  adId: number;
  roomId: number;
  type: string;
  title: string;
  mainPhotoUrl: string;
  pricePerMonth: number;
  monthlyPrice: {
    type: string;
    minimumPrice: number;
    fixedPrice?: number;
    pricesByMonth?: {[month: string]: number};
  };
  visited: boolean;
  neighborhoodName: string;
  runnerName: string;
  url: string;
  favorite: boolean;
  checked: boolean;
  currencySymbol: string;
  currencyLabel: string;
  currencyIsoCode: string;
  sharedRoom: boolean;
  roomType: number[];
  aptFeatures: number[];
  roomFeatures: number[];
  suitFeatures: number[];
  relevance: number;
  city: string;
  refreshAvailabilitiesDate: string;
  reviews: {
    count: number;
    ratingAverage: number;
  };
}

export interface HomeCardResponse {
  ok: boolean;
  data: {
    homecards: HomeCard[];
  };
}

export interface HomeCardRequestOptions extends MarkerRequestOptions {
  offset?: number;
}
