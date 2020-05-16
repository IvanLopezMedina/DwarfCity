import {all} from 'redux-saga/effects';
import dwarfSagas from './dwarfSagas';

export default function* rootSaga() {
  yield all([dwarfSagas()]);
}
