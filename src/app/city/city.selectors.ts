import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State } from './city.reducer';


// Private selectors
export const _getFilters = (state: State) => state.filters;
export const _getSelectedFilter = (state: State) => state.selectedFilter;
export const _getOrders = (state: State) => state.orders;
export const _getSelectedOrder = (state: State) => state.selectedOrder;


// Public selectors
export const getCityState = createFeatureSelector<State>('city');

export const getFilters = createSelector(getCityState, _getFilters);
export const getSelectedFilter = createSelector(getCityState, _getSelectedFilter);
export const getOrders = createSelector(getCityState, _getOrders);
export const getSelectedOrder = createSelector(getCityState, _getSelectedOrder);


export const getRequestFilters = createSelector(getCityState, _getSelectedOrder);
