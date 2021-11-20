import {
  loadStarshipsFailure,
  loadStarshipsSuccess,
  STARSHIPS_ACTION_TYPES,
} from 'ducks/starships';
import {
  all,
  call,
  takeLatest,
  put,
  CallEffect,
  PutEffect,
} from 'redux-saga/effects';
import { StarshipsService } from 'services';
import { Starship } from 'types/starships';

type LoadStarshipsResponse = {
  count: number;
  next: string;
  previous: string;
  results: Starship[];
};

export interface ActionLoadStarships {
  type:
    | typeof STARSHIPS_ACTION_TYPES.LOAD_STARSHIPS_SUCCESS
    | typeof STARSHIPS_ACTION_TYPES.LOAD_STARSHIPS_FAILURE;
  payload?: { starships: Starship[] };
}

export function* loadStarshipsSaga(): Generator<
  CallEffect<void> | PutEffect<ActionLoadStarships>,
  void,
  LoadStarshipsResponse
> {
  const response = yield call(StarshipsService.getStarships);

  if (response) {
    yield put(loadStarshipsSuccess(response.results));
  } else {
    yield put(loadStarshipsFailure());
  }
}

function* starshipsSaga() {
  yield all([
    yield takeLatest(STARSHIPS_ACTION_TYPES.LOAD_STARSHIPS, loadStarshipsSaga),
  ]);
}

export default starshipsSaga;
