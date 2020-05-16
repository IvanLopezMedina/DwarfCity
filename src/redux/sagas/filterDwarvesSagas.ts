import {select, put, takeLatest, all} from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import {copyDwarves} from '../actions/loadDwarvesActions';
import {searchDwarvesByName} from '../actions/searchDwarvesActions';
import {
  toggleFilter,
  filterDwarvesByParams,
  saveFilterParameters,
} from '../actions/dwarvesActions';

function* filterDwarves(data) {
  const state = yield select();
  yield put(toggleFilter(!state.isFilterOn));
  if (state.isFilterOn) {
    yield put(copyDwarves(state.dwarves));
    if (state.searchedName !== '') {
      yield put(searchDwarvesByName(state.searchedName));
    }
  } else {
    yield put(filterDwarvesByParams(data.params));
  }
  yield put(saveFilterParameters(data.params));
}

function* watchFilterDwarves() {
  yield takeLatest(types.GET_FILTERED_DWARVES, filterDwarves);
}

function* filterDwarvesSagas() {
  yield all([watchFilterDwarves()]);
}

export default filterDwarvesSagas;
