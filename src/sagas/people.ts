import {
  loadPeopleFailure,
  loadPeopleSuccess,
  PEOPLE_ACTION_TYPES,
} from 'ducks/people';
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

type LoadPeopleResponse = {
  count: number;
  next: string;
  previous: string;
  results: Person[];
};

export interface ActionLoadPeople {
  type:
    | typeof PEOPLE_ACTION_TYPES.LOAD_PEOPLE_SUCCESS
    | typeof PEOPLE_ACTION_TYPES.LOAD_PEOPLE_FAILURE;
  payload?: { people: Person[] };
}

export function* loadPeopleSaga(): Generator<
  CallEffect<void> | PutEffect<ActionLoadPeople>,
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
