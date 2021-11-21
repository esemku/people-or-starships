import { Person } from 'types/people';

export type ActionLoadPeople = {
  type:
    | typeof PEOPLE_ACTION_TYPES.LOAD_PEOPLE
    | typeof PEOPLE_ACTION_TYPES.LOAD_PEOPLE_SUCCESS
    | typeof PEOPLE_ACTION_TYPES.LOAD_PEOPLE_FAILURE;
  payload?: { people: Person[] };
};

export const PEOPLE_ACTION_TYPES = {
  LOAD_PEOPLE: 'swapi/people/LOAD_PEOPLE',
  LOAD_PEOPLE_SUCCESS: 'swapi/people/LOAD_PEOPLE_SUCCESS',
  LOAD_PEOPLE_FAILURE: 'swapi/people/LOAD_PEOPLE_FAILURE',
};

export const loadPeople = (): ActionLoadPeople => ({
  type: PEOPLE_ACTION_TYPES.LOAD_PEOPLE,
});

export const loadPeopleSuccess = (people: Person[]): ActionLoadPeople => ({
  type: PEOPLE_ACTION_TYPES.LOAD_PEOPLE_SUCCESS,
  payload: { people },
});

export const loadPeopleFailure = (): ActionLoadPeople => ({
  type: PEOPLE_ACTION_TYPES.LOAD_PEOPLE_FAILURE,
});
