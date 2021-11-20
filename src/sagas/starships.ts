import {
  loadStarshipsFailure,
  loadStarshipsSuccess,
  STARSHIPS_ACTION_TYPES,
} from 'ducks/starships';
import { all, call, takeLatest, put } from 'redux-saga/effects';
import { StarshipsService } from 'services';

export function* loadStarshipsSaga() {
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
