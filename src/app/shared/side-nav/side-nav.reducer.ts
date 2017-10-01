import { Actions, DESTROY, INIT, TOGGLE } from './side-nav.actions';


// TODO: Migrate this reducer to: @ngrx/entity
// See: https://github.com/ngrx/platform/issues/366


export interface SideNavEntityState {
  open: boolean;
}

export interface SideNavEntities {
  [id: string]: SideNavEntityState;
}

export interface State {
  ids: string[];
  entities: SideNavEntities;
}

// This is only for performance in selectors
export const sideNavEntityInitialState: SideNavEntityState = {
  open: true
};

export const initialState: State = {
  ids: [],
  entities: {}
};

export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {

    case TOGGLE: {

      const id: string = action.payload;

      if (!state.entities[id]) {
        return state;
      }

      return {
        ...state,
        entities: {
          ...state.entities,
          [id]: {
            open: !state.entities[id].open
          }
        }
      };

    }

    case INIT: {

      const id: string = action.payload;

      if (state.entities[id]) {
        return state;
      }

      return {
        ids: [...state.ids, id],
        entities: {...state.entities, [id]: sideNavEntityInitialState}
      };

    }

    case DESTROY: {

      const id: string = action.payload;

      if (!state.entities[id]) {
        return state;
      }

      const newState: State = {
        ...state,
        ids: state.ids.filter((_id: string) => _id !== id)
      };
      delete newState[id];

      return newState;

    }

    default: {
      return state;
    }
  }
}
