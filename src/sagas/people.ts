import {
  loadPeopleFailure,
  loadPeopleSuccess,
  PEOPLE_ACTION_TYPES,
} from 'ducks/people';
import { ActionLoadPeople } from 'ducks/people/actions';
import {
  all,
  call,
  takeLatest,
  put,
  CallEffect,
  PutEffect,
} from 'redux-saga/effects';
import { PeopleService } from 'services';
import { Person } from 'types/people';

export type LoadPeopleResponse = {
  count: number;
  next: string;
  previous: string;
  results: Person[];
};

export function* loadPeopleSaga(): Generator<
  CallEffect<LoadPeopleResponse> | PutEffect<ActionLoadPeople>,
  void,
  LoadPeopleResponse
> {
  const response: LoadPeopleResponse = yield call(PeopleService.getPeople);

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
