import * as types from './actionTypes';

export function getDwarvesByName(name, reset, search) {
  return {type: types.GET_DWARVES_BY_NAME, payload: {name, reset, search}};
}

export function searchDwarvesByName(name) {
  return {type: types.SEARCH_DWARVES_BY_NAME, name};
}

export function saveSearchedName(name) {
  return {type: types.SAVE_SEARCHED_NAME, name};
}
