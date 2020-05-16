import {select, put, takeLatest, all} from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import {copyDwarves} from '../actions/loadDwarvesActions';
import {
  searchDwarvesByName,
  saveSearchedName,
} from '../actions/searchDwarvesActions';
import {filterDwarvesByParams} from '../actions/dwarvesActions';

function* searchDwarves(data) {
  const state = yield select();
  if (data.payload.reset) {
    yield put(copyDwarves(state.dwarves));
    yield put(saveSearchedName(''));
  }
  if (state.isFilterOn) {
    yield put(filterDwarvesByParams(state.filterParameters));
  }
  if (data.payload.search) {
    yield put(saveSearchedName(data.payload.name));
    yield put(searchDwarvesByName(data.payload.name));
  }
}

function* watchSearchDwarves() {
  yield takeLatest(types.GET_DWARVES_BY_NAME, searchDwarves);
}

function* searchDwarvesSagas() {
  yield all([watchSearchDwarves()]);
}

export default searchDwarvesSagas;
