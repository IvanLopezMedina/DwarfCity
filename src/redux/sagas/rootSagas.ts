import {all} from 'redux-saga/effects';
import loadDwarvesSagas from './loadDwarvesSagas';
import searchDwarvesSagas from './searchDwarvesSagas';
import filterDwarvesSagas from './filterDwarvesSagas';

export default function* rootSaga() {
  yield all([loadDwarvesSagas(), searchDwarvesSagas(), filterDwarvesSagas()]);
}
