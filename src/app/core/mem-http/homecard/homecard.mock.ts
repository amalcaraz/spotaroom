import { HomeCard, HomeCardResponse } from '../../homecard/homecard.model';
import * as dedupe from 'dedupe';

import {
  HOMECARD_MADRID,
  HOMECARD_MADRID_APARTMENTS,
  HOMECARD_MADRID_RESIDENCES,
  HOMECARD_MADRID_ROOMS,
  HOMECARD_MADRID_STUDIOS
} from './homecard-madrid.mock';
import {
  HOMECARD_BARCELONA,
  HOMECARD_BARCELONA_APARTMENTS,
  HOMECARD_BARCELONA_RESIDENCES,
  HOMECARD_BARCELONA_ROOMS,
  HOMECARD_BARCELONA_STUDIOS
} from './homecard-barcelona.mock';
import {
  HOMECARD_VALENCIA,
  HOMECARD_VALENCIA_APARTMENTS,
  HOMECARD_VALENCIA_RESIDENCES,
  HOMECARD_VALENCIA_ROOMS,
  HOMECARD_VALENCIA_STUDIOS
} from './homecard-valencia.mock';
import {
  HOMECARD_LONDON,
  HOMECARD_LONDON_APARTMENTS,
  HOMECARD_LONDON_RESIDENCES,
  HOMECARD_LONDON_ROOMS,
  HOMECARD_LONDON_STUDIOS
} from './homecard-london.mock';
import {
  HOMECARD_PARIS,
  HOMECARD_PARIS_APARTMENTS,
  HOMECARD_PARIS_RESIDENCES,
  HOMECARD_PARIS_ROOMS,
  HOMECARD_PARIS_STUDIOS
} from './homecard-paris.mock';

const dedupeKeyFn = (value: HomeCard) => value.id;

export const HOMECARD: HomeCardResponse = {
  'ok': true,
  'data': {
    'homecards': [
      ...dedupe([
        ...HOMECARD_MADRID,
        ...HOMECARD_MADRID_RESIDENCES,
        ...HOMECARD_MADRID_APARTMENTS,
        ...HOMECARD_MADRID_ROOMS,
        ...HOMECARD_MADRID_STUDIOS
      ], dedupeKeyFn),
      ...dedupe([
        ...HOMECARD_BARCELONA,
        ...HOMECARD_BARCELONA_RESIDENCES,
        ...HOMECARD_BARCELONA_APARTMENTS,
        ...HOMECARD_BARCELONA_ROOMS,
        ...HOMECARD_BARCELONA_STUDIOS
      ], dedupeKeyFn),
      ...dedupe([
        ...HOMECARD_VALENCIA,
        ...HOMECARD_VALENCIA_RESIDENCES,
        ...HOMECARD_VALENCIA_APARTMENTS,
        ...HOMECARD_VALENCIA_ROOMS,
        ...HOMECARD_VALENCIA_STUDIOS
      ], dedupeKeyFn),
      ...dedupe([
        ...HOMECARD_LONDON,
        ...HOMECARD_LONDON_RESIDENCES,
        ...HOMECARD_LONDON_APARTMENTS,
        ...HOMECARD_LONDON_ROOMS,
        ...HOMECARD_LONDON_STUDIOS
      ], dedupeKeyFn),
      ...dedupe([
        ...HOMECARD_PARIS,
        ...HOMECARD_PARIS_RESIDENCES,
        ...HOMECARD_PARIS_APARTMENTS,
        ...HOMECARD_PARIS_ROOMS,
        ...HOMECARD_PARIS_STUDIOS
      ], dedupeKeyFn)
    ]
  }
};
