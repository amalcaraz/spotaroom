import { Marker, MarkerRequestOptions } from './marker.model';
import { Actions, ALREADY_LOADED, LOAD, LOAD_FAILED, LOAD_SUCCESS } from './marker.actions';
import { CityId } from '../../app.model';
import { DEFAULT_MARKER_FILTER, DEFAULT_MARKER_OPTIONS } from './marker.service';


// TODO: Migrate this reducer to: @ngrx/entity
// See: https://github.com/ngrx/platform/issues/366


export interface MarkerEntities {
  [city: string]: Marker;
}

export interface State {
  ids: number[];
  entities: MarkerEntities;
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

    case ALREADY_LOADED: {

      return {
        ...state,
        loading: !state.loading
      };

    }

    case LOAD_SUCCESS: {

      const city: CityId = action.payload.city;
      const options: MarkerRequestOptions = action.payload.options;
      let markers: Marker[] = action.payload.markers;

      // Store only the first count items (30)
      markers = markers.slice(0, options.count || DEFAULT_MARKER_OPTIONS.count);

      // If the response items has been filtered, replace the stored items which has type equal to 'all'
      // This would not be necessary if the backend was serving the model with city and type properties.
      let newMarkers: Marker[];

      if (options.filter === DEFAULT_MARKER_FILTER) {

        newMarkers = markers.filter((marker: Marker) => !state.entities[marker.id]);

      } else {

        newMarkers = markers.filter((marker: Marker) => !state.entities[marker.id] || state.entities[marker.id].filter === DEFAULT_MARKER_FILTER);

      }

      // Add new items to the store or replace them
      const newIds: number[] = newMarkers.map((marker: Marker) => marker.id);
      const newEntities: MarkerEntities = newMarkers.reduce((entities: MarkerEntities, marker: Marker) => ({
        ...entities,
        [marker.id]: {
          ...marker,
          ...options,
          city,
        }
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
