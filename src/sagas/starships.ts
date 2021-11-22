import {
  loadStarshipsFailure,
  loadStarshipsSuccess,
  STARSHIPS_ACTION_TYPES,
} from 'ducks/starships';
import { ActionLoadStarships } from 'ducks/starships/actions';
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

export type LoadStarshipsResponse = {
  count: number;
  next: string;
  previous: string;
  results: Starship[];
};

export function* loadStarshipsSaga(): Generator<
  CallEffect<LoadStarshipsResponse> | PutEffect<ActionLoadStarships>,
  void,
  LoadStarshipsResponse
> {
  try {
    const response: LoadStarshipsResponse = yield call(
      StarshipsService.getStarships,
    );

    if (response) {
      yield put(loadStarshipsSuccess(response.results));
    } else {
      yield put(loadStarshipsFailure());
    }
  } catch (e) {
    yield put(loadStarshipsFailure());
  }
}

function* starshipsSaga() {
  yield all([
    yield takeLatest(STARSHIPS_ACTION_TYPES.LOAD_STARSHIPS, loadStarshipsSaga),
  ]);
}

export default starshipsSaga;
