import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ASCENDING_ORDER, DEFAULT_FILTER, State } from './city.reducer';
import { getAllHomeCards } from '../core/homecard/homecard.selectors';
import { HomeCard } from '../core/homecard/homecard.model';
import { getRouterState } from '../core/core.selectors';


// Private selectors
export const _getSelectedFilter = (state: State) => state.selectedFilter;
export const _getSelectedOrder = (state: State) => state.selectedOrder;
export const _getCities = (state: State) => state.cities;
export const _getFilters = (state: State) => state.filters;
export const _getOrders = (state: State) => state.orders;


// Public selectors
export const getCityState = createFeatureSelector<State>('city');

export const getSelectedFilter = createSelector(getCityState, _getSelectedFilter);
export const getSelectedOrder = createSelector(getCityState, _getSelectedOrder);
export const getCities = createSelector(getCityState, _getCities);
export const getFilters = createSelector(getCityState, _getFilters);
export const getOrders = createSelector(getCityState, _getOrders);


/**
 * In order to improve performance I am caching the items in the store,
 * but when I request them the first time without any filter applied, I need a way
 * to mark them to be able to filter them later offline,
 * I usually do that in backend, but it seems that the filters for Marker model
 * and the property 'type' of HomeCard model has different values.
 **/
export const FILTER_MAP = {
  'apartments': 'apartment',
  'rooms': 'room_shared',
  'studios': 'studio',
  'residences': 'residence'
};

export const getHomeCardsFiltered =
  createSelector(getAllHomeCards, getRouterState, getSelectedFilter, getSelectedOrder, (homeCards, routerState, filter, order) => {

  let result: HomeCard[] = homeCards;
  const selectedCity: string = routerState.state.params['city'];

  // Filter by city
  if (selectedCity) {

    result = result.filter((homeCard: HomeCard) => homeCard.city === selectedCity);

  }

  // Filter by selected filter
  if (filter !== DEFAULT_FILTER) {

    result = result.filter((homeCard: HomeCard) => homeCard.type === FILTER_MAP[filter]);

  }

  // Sort by selected order
  result = result
    .slice()
    .sort((a: HomeCard, b: HomeCard) => order === ASCENDING_ORDER
      ? a.pricePerMonth - b.pricePerMonth
      : b.pricePerMonth - a.pricePerMonth
    );

  return result;

});


