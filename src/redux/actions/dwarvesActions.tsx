import * as types from './actionTypes';

export function getFilteredDwarves(params) {
  return {type: types.GET_FILTERED_DWARVES, params};
}

export function filterDwarvesByParams(params) {
  return {type: types.FILTER_DWARVES, params};
}

export function saveFilterParameters(params) {
  return {type: types.SAVE_FILTER_PARAMETERS, params};
}

export function saveDefaultFilterParameters(params) {
  return {type: types.SAVE_DEFAULT_FILTER_PARAMETERS, params};
}

export function toggleFilter(toggle) {
  if (toggle) return {type: types.TOGGLE_FILTER, toggle};
  else return {type: types.TOGGLE_FILTER, toggle};
}
