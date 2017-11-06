import {
  MARKER_MADRID,
  MARKER_MADRID_APARTMENTS,
  MARKER_MADRID_RESIDENCES,
  MARKER_MADRID_ROOMS,
  MARKER_MADRID_STUDIOS
} from './marker-madrid.mock';
import {
  MARKER_BARCELONA,
  MARKER_BARCELONA_APARTMENTS,
  MARKER_BARCELONA_RESIDENCES,
  MARKER_BARCELONA_ROOMS,
  MARKER_BARCELONA_STUDIOS
} from './marker-barcelona.mock';
import {
  MARKER_VALENCIA,
  MARKER_VALENCIA_APARTMENTS,
  MARKER_VALENCIA_RESIDENCES,
  MARKER_VALENCIA_ROOMS,
  MARKER_VALENCIA_STUDIOS
} from './marker-valencia.mock';
import {
  MARKER_LONDON,
  MARKER_LONDON_APARTMENTS,
  MARKER_LONDON_RESIDENCES,
  MARKER_LONDON_ROOMS,
  MARKER_LONDON_STUDIOS
} from './marker-london.mock';
import {
  MARKER_PARIS,
  MARKER_PARIS_APARTMENTS,
  MARKER_PARIS_RESIDENCES,
  MARKER_PARIS_ROOMS,
  MARKER_PARIS_STUDIOS
} from './marker-paris.mock';
import { MarkerResponse } from '../../marker/marker.model';


export interface MarkerResponseWithIdAndType extends MarkerResponse {
  id: string;
  type?: 'apartments' | 'residences' | 'rooms' | 'studios';
}

export const MARKER: MarkerResponseWithIdAndType[] = [

  {id: 'madrid', ...MARKER_MADRID},
  {id: 'madrid', type: 'apartments', ...MARKER_MADRID_APARTMENTS},
  {id: 'madrid', type: 'residences', ...MARKER_MADRID_RESIDENCES},
  {id: 'madrid', type: 'rooms', ...MARKER_MADRID_ROOMS},
  {id: 'madrid', type: 'studios', ...MARKER_MADRID_STUDIOS},

  {id: 'barcelona', ...MARKER_BARCELONA},
  {id: 'barcelona', type: 'apartments', ...MARKER_BARCELONA_APARTMENTS},
  {id: 'barcelona', type: 'residences', ...MARKER_BARCELONA_RESIDENCES},
  {id: 'barcelona', type: 'rooms', ...MARKER_BARCELONA_ROOMS},
  {id: 'barcelona', type: 'studios', ...MARKER_BARCELONA_STUDIOS},

  {id: 'valencia', ...MARKER_VALENCIA},
  {id: 'valencia', type: 'apartments', ...MARKER_VALENCIA_APARTMENTS},
  {id: 'valencia', type: 'residences', ...MARKER_VALENCIA_RESIDENCES},
  {id: 'valencia', type: 'rooms', ...MARKER_VALENCIA_ROOMS},
  {id: 'valencia', type: 'studios', ...MARKER_VALENCIA_STUDIOS},

  {id: 'london', ...MARKER_LONDON},
  {id: 'london', type: 'apartments', ...MARKER_LONDON_APARTMENTS},
  {id: 'london', type: 'residences', ...MARKER_LONDON_RESIDENCES},
  {id: 'london', type: 'rooms', ...MARKER_LONDON_ROOMS},
  {id: 'london', type: 'studios', ...MARKER_LONDON_STUDIOS},

  {id: 'paris', ...MARKER_PARIS},
  {id: 'paris', type: 'apartments', ...MARKER_PARIS_APARTMENTS},
  {id: 'paris', type: 'residences', ...MARKER_PARIS_RESIDENCES},
  {id: 'paris', type: 'rooms', ...MARKER_PARIS_ROOMS},
  {id: 'paris', type: 'studios', ...MARKER_PARIS_STUDIOS}
];
