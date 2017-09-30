import { HomeCard } from './homecard.model';
import { Actions, LOAD, LOAD_FAILED, LOAD_SUCCESS } from './homecard.actions';


// TODO: Migrate this reducer to: @ngrx/entity
// See: https://github.com/ngrx/platform/issues/366


export interface HomeCardEntities {
  [id: string]: HomeCard;
}

export interface State {
  ids: number[];
  entities: HomeCardEntities;
  loading: boolean;
  error: string;
}

export const initialState: State = {
  ids: [],
  entities: {},
  loading: true,
  error: null
};

export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {

    case LOAD: {

      return {
        ...state,
        error: null,
        loading: true
      };

    }

    case LOAD_SUCCESS: {

      const homeCards: HomeCard[] = action.payload;
      const newBooks: HomeCard[] = homeCards.filter((homeCard: HomeCard) => !state.entities[homeCard.id]);

      const newIds: number[] = newBooks.map((homeCard: HomeCard) => homeCard.id);
      const newEntities: HomeCardEntities = newBooks.reduce((entities: HomeCardEntities, homeCard: HomeCard) => ({
        ...entities,
        [homeCard.id]: homeCard
      }), {});

      return {
        ids: [...state.ids, ...newIds],
        entities: {...state.entities, ...newEntities},
        error: null,
        loading: false
      };

    }

    case LOAD_FAILED: {

      const error = action.payload;

      return {
        ...state,
        error,
        loading: false
      };

    }

    default: {
      return state;
    }
  }
}
