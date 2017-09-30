import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State } from './homecard.reducer';


// Private selectors
export const _getEntities = (state: State) => state.entities;
export const _getIds = (state: State) => state.ids;
export const _getLoading = (state: State) => state.loading;
export const _getError = (state: State) => state.error;


// Public selectors
export const getCityState = createFeatureSelector<State>('homecard');

export const getEntities = createSelector(getCityState, _getEntities);
export const getIds = createSelector(getCityState, _getIds);
export const getLoading = createSelector(getCityState, _getLoading);
export const getError = createSelector(getCityState, _getError);

export const getAll = createSelector(getEntities, getIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});


