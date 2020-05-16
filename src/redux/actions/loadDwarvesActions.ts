import * as types from './actionTypes';

export function getDwarves() {
  return {type: types.GET_DWARVES_SUCCESS};
}

export function setDwarves(dwarves) {
  return {type: types.LOAD_DWARVES_SUCCESS, dwarves};
}
