import { PeopleMock } from 'mocks/people.mock';
import { IPeopleState } from 'types/ducks';
import { StoreMock } from 'utils/mocks/store';

import peopleReducer, {
  loadPeople,
  loadPeopleFailure,
  loadPeopleSuccess,
  PEOPLE_ACTION_TYPES,
  getPeople,
} from '../people';

describe('ducks/people', () => {
  describe('reducer', () => {
    const state: IPeopleState[] = [];

    it('loads people', () => {
      const newState = peopleReducer(
        state,
        loadPeopleSuccess(StoreMock.people),
      );

      expect(newState).toStrictEqual(StoreMock.people);
    });

    it('fails to load currencies', () => {
      const newState = peopleReducer(state, loadPeopleFailure());

      expect(newState).toStrictEqual(null);
    });
  });
  describe('action creators', () => {
    it('creates load people actions', () => {
      expect(loadPeople().type).toBe(PEOPLE_ACTION_TYPES.LOAD_PEOPLE);
      expect(loadPeopleSuccess(PeopleMock).type).toBe(
        PEOPLE_ACTION_TYPES.LOAD_PEOPLE_SUCCESS,
      );
      expect(loadPeopleFailure().type).toBe(
        PEOPLE_ACTION_TYPES.LOAD_PEOPLE_FAILURE,
      );
    });
  });
  describe('selectors', () => {
    it('returns people', () => {
      const people = getPeople(StoreMock);

      expect(people).toContain(StoreMock.people[1]);
    });
  });
});
