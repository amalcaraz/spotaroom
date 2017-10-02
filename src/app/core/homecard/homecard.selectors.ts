import { createFeatureSelector, createSelector } from '@ngrx/store';

import { HomeCardEntities, State } from './homecard.reducer';
import { MarkerId } from '../marker/marker.model';
import { HomeCard } from './homecard.model';


// Private selectors
export const _getEntities = (state: State) => state.entities;
export const _getIds = (state: State) => state.ids;
export const _getLoading = (state: State) => state.loading;
export const _getError = (state: State) => state.error;


// Public selectors
export const getHomeCardState = createFeatureSelector<State>('homecard');

export const getEntities = createSelector(getHomeCardState, _getEntities);
export const getIds = createSelector(getHomeCardState, _getIds);
export const getLoading = createSelector(getHomeCardState, _getLoading);
export const getError = createSelector(getHomeCardState, _getError);

export const getAllHomeCards = createSelector(getEntities, getIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});

export const getAllHomeCardsFiltered = (ids: MarkerId[]) => createSelector(getEntities, (entities: HomeCardEntities) => {

  return ids
    .map((id: MarkerId) => entities[id])
    .filter((homeCard: HomeCard) => !!homeCard);

});
