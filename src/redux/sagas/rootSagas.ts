import {all} from 'redux-saga/effects';
import loadDwarvesSagas from './loadDwarvesSagas';

export default function* rootSaga() {
  yield all([loadDwarvesSagas()]);
}
