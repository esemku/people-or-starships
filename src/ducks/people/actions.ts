export const PEOPLE_ACTION_TYPES = {
  LOAD_PEOPLE: 'swapi/people/LOAD_PEOPLE',
  LOAD_PEOPLE_SUCCESS: 'swapi/people/LOAD_PEOPLE_SUCCESS',
  LOAD_PEOPLE_FAILURE: 'swapi/people/LOAD_PEOPLE_FAILURE',
};

export const loadPeople = () => ({ type: PEOPLE_ACTION_TYPES.LOAD_PEOPLE });

export const loadPeopleSuccess = (people) => ({
  type: PEOPLE_ACTION_TYPES.LOAD_PEOPLE_SUCCESS,
  payload: { people },
});

export const loadPeopleFailure = () => ({
  type: PEOPLE_ACTION_TYPES.LOAD_PEOPLE_FAILURE,
});
