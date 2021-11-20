import { all, fork } from 'redux-saga/effects';
import peopleSaga from './people';
import starshipsSaga from './starships';

export default function* rootSaga() {
  yield all([fork(peopleSaga), fork(starshipsSaga)]);
}
