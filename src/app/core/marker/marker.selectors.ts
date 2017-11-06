import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State } from './marker.reducer';
import { CityId } from '../../app.model';
import { Marker, MarkerRequestOptions } from './marker.model';
import { DEFAULT_MARKER_FILTER } from './marker.service';


// Private selectors
export const _getEntities = (state: State) => state.entities;
export const _getIds = (state: State) => state.ids;
export const _getLoading = (state: State) => state.loading;
export const _getError = (state: State) => state.error;


// Public selectors
export const getMarkerState = createFeatureSelector<State>('marker');

export const getEntities = createSelector(getMarkerState, _getEntities);
export const getIds = createSelector(getMarkerState, _getIds);
export const getLoading = createSelector(getMarkerState, _getLoading);
export const getError = createSelector(getMarkerState, _getError);

export const getAllMarkers = createSelector(getEntities, getIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});

export const getAllMarkersFiltered = (city: CityId, options: MarkerRequestOptions) => createSelector(getAllMarkers, (markers: Marker[]) => {
  return markers
    .filter((marker: Marker) => marker.city === city)
    .filter((marker: Marker) => options
      ? (options.filter === DEFAULT_MARKER_FILTER || marker.filter === options.filter)
      : true);
});
