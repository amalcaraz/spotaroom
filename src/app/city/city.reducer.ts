import { Actions, SET_FILTER, SET_ORDER } from './city.actions';
import { DEFAULT_MARKER_FILTER } from '../core/marker/marker.service';


export interface State {
  selectedFilter: string;
  selectedOrder: string;
  cities: string[];
  filters: string[];
  orders: string[];
}

export const DEFAULT_FILTER = DEFAULT_MARKER_FILTER;
export const ASCENDING_ORDER = 'ascending';
export const DESCENDING_ORDER = 'descending';

/**
 * cities and filters are mocked, but it could be fetched from another endpoint and stored
 * adding new /core/[entity] service, effects, reducer and actions like "LOAD_FILTER" or "LOAD_CITIES"
*/
export const initialState: State = {
  selectedFilter: DEFAULT_FILTER,
  selectedOrder: 'ascending',
  cities: [
    'madrid',
    'barcelona',
    'valencia',
    'london',
    'paris'
  ],
  filters: [
    DEFAULT_FILTER,
    'apartments',
    'rooms',
    'studios',
    'residences'
  ],
  orders: [
    ASCENDING_ORDER,
    DESCENDING_ORDER
  ]
};

export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {

    case SET_FILTER: {
      return {
        ...state,
        selectedFilter: action.payload,
      };
    }

    case SET_ORDER: {
      return {
        ...state,
        selectedOrder: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}
