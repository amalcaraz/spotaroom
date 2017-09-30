import { Actions, SET_FILTER, SET_ORDER } from './city.actions';


export interface State {
  selectedFilter: string;
  selectedOrder: string;
  filters: string[];
  orders: string[];
}

export const initialState: State = {
  selectedFilter: 'all',
  selectedOrder: 'ascending',
  filters: [
    'all',
    'apartments',
    'rooms',
    'studios',
    'residences'
  ],
  orders: [
    'ascending',
    'descending'
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
