import { Actions, SET_FILTER, SET_ORDER } from './city.actions';
import { DEFAULT_MARKER_FILTER } from '../core/marker/marker.service';


export interface State {
  selectedFilter: string;
  selectedOrder: string;
  filters: string[];
  orders: string[];
}

export const DEFAULT_FILTER = DEFAULT_MARKER_FILTER;
export const ASCENDING_ORDER = 'ascending';
export const DESCENDING_ORDER = 'descending';

export const initialState: State = {
  selectedFilter: DEFAULT_FILTER,
  selectedOrder: 'ascending',
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
