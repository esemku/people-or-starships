import {
  loadPeopleFailure,
  loadPeopleSuccess,
  PEOPLE_ACTION_TYPES,
} from 'ducks/people';
import { all, call, takeLatest, put } from 'redux-saga/effects';
import { PeopleService } from 'services';

export function* loadPeopleSaga() {
  const response = yield call(PeopleService.getPeople);

  if (response) {
    yield put(loadPeopleSuccess(response.results));
  } else {
    yield put(loadPeopleFailure());
  }
}

function* peopleSaga() {
  yield all([
    yield takeLatest(PEOPLE_ACTION_TYPES.LOAD_PEOPLE, loadPeopleSaga),
  ]);
}

export default peopleSaga;
