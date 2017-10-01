import { createFeatureSelector, createSelector } from '@ngrx/store';

import { sideNavEntityInitialState, State } from './side-nav.reducer';


// Private selectors
export const _getEntities = (state: State) => state.entities;
export const _getIds = (state: State) => state.ids;


// Public selectors
export const getSideNavState = createFeatureSelector<State>('side-nav');
export const getEntities = createSelector(getSideNavState, _getEntities);
export const getIds = createSelector(getSideNavState, _getIds);


// Generates a selector which emits changes from the store only when the given id entity changes!
export const getSideNavStateById = (id: string) => createSelector(getEntities, (entities) => {
  return (entities[id] || sideNavEntityInitialState).open;
});


