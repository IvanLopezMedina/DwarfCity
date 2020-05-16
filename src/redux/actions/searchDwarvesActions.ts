import * as types from './actionTypes';

export function searchDwarvesByName(name) {
  return {type: types.SEARCH_DWARVES_BY_NAME, name};
}

export function saveSearchedName(name) {
  return {type: types.SAVE_SEARCHED_NAME, name};
}
