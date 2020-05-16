import {put, takeLatest, all, call} from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import * as dwarvesApi from '../../api/dwarvesApi';
import {beginApiCall, apiCallError} from './../actions/apiStatusActions';
import {setDwarves} from '../actions/loadDwarvesActions';
import {
  copyDwarves,
  saveDefaultFilterParameters,
} from '../actions/dwarvesActions';
import {getDefaultFilterParameters} from '../../utils';

function* loadDwarves() {
  yield put(beginApiCall());
  try {
    const dwarves = yield call(dwarvesApi.getDwarves);
    const filterParameters = getDefaultFilterParameters(dwarves);

    yield put(setDwarves(dwarves));
    yield put(copyDwarves(dwarves));
    yield put(saveDefaultFilterParameters(filterParameters));
  } catch (error) {
    yield put(apiCallError());
    throw error;
  }
}

function* watchGetDwarves() {
  yield takeLatest(types.GET_DWARVES_SUCCESS, loadDwarves);
}

function* loadDwarvesSagas() {
  yield all([watchGetDwarves()]);
}

export default loadDwarvesSagas;
