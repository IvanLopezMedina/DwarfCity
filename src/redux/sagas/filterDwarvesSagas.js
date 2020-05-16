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
  if (state.isFilterOn) {
    yield put(toggleFilter(!state.isFilterOn));
    if (state.searchedName !== '') {
      yield put(copyDwarves(state.dwarves));
      yield put(searchDwarvesByName(state.searchedName));
    } else {
      yield put(copyDwarves(state.dwarves));
    }
  } else {
    yield put(toggleFilter(!state.isFilterOn));
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
