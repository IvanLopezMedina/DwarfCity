import * as types from './actionTypes';
import * as dwarvesApi from '../../api/dwarvesApi';
import {beginApiCall, apiCallError} from './apiStatusActions';

export function loadDwarvesSuccess(dwarves) {
  return {type: types.LOAD_DWARVES_SUCCESS, dwarves};
}

export function searchDwarvesByName(name) {
  return {type: types.SEARCH_DWARVES_BY_NAME, name};
}

export function copyDwarves(dwarves) {
  return {type: types.COPY_DWARVES, dwarves};
}

export function loadDwarves() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return dwarvesApi
      .getDwarves()
      .then((dwarves) => {
        dispatch(loadDwarvesSuccess(dwarves.Brastlewark));
        dispatch(copyDwarves(dwarves.Brastlewark));
      })
      .catch((error) => {
        dispatch(apiCallError());
        throw error;
      });
  };
}

export function searchDwarves(name, reset, search) {
  return function (dispatch, getState) {
    if (reset) dispatch(copyDwarves(getState().dwarves));
    if (search) dispatch(searchDwarvesByName(name));
  };
}
