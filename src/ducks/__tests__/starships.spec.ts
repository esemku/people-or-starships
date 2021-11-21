import { StarshipsMock } from 'mocks/starships.mock';
import { IStarshipsState } from 'types/ducks';
import { StoreMock } from 'utils/mocks/store';

import starshipsReducer, {
  loadStarshipsFailure,
  loadStarshipsSuccess,
  loadStarships,
  STARSHIPS_ACTION_TYPES,
  getStarships,
} from '../starships';

describe('ducks/starships', () => {
  describe('reducer', () => {
    const state: IStarshipsState[] = [];

    it('loads starships', () => {
      const newState = starshipsReducer(
        state,
        loadStarshipsSuccess(StoreMock.starships),
      );

      expect(newState).toStrictEqual(StoreMock.starships);
    });

    it('fails to load starships', () => {
      const newState = starshipsReducer(state, loadStarshipsFailure());

      expect(newState).toStrictEqual(null);
    });
  });
  describe('action creators', () => {
    it('creates load starships actions', () => {
      expect(loadStarships().type).toBe(STARSHIPS_ACTION_TYPES.LOAD_STARSHIPS);
      expect(loadStarshipsSuccess(StarshipsMock).type).toBe(
        STARSHIPS_ACTION_TYPES.LOAD_STARSHIPS_SUCCESS,
      );
      expect(loadStarshipsFailure().type).toBe(
        STARSHIPS_ACTION_TYPES.LOAD_STARSHIPS_FAILURE,
      );
    });
  });
  describe('selectors', () => {
    it('returns starships', () => {
      const starships = getStarships(StoreMock);

      expect(starships).toContain(StoreMock.starships[1]);
    });
  });
});
