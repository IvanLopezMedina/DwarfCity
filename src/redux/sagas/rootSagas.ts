import {all} from 'redux-saga/effects';
import loadDwarvesSagas from './loadDwarvesSagas';
import searchDwarvesSagas from './searchDwarvesSagas';

export default function* rootSaga() {
  yield all([loadDwarvesSagas(), searchDwarvesSagas()]);
}
