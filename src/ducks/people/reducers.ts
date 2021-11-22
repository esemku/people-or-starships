import { IPeopleState } from 'types/ducks';
import { ActionLoadPeople, PEOPLE_ACTION_TYPES } from './actions';

const peopleReducer = (
  state: IPeopleState[] | null = null,
  action: ActionLoadPeople,
) => {
  switch (action.type) {
    case PEOPLE_ACTION_TYPES.LOAD_PEOPLE_SUCCESS:
      return action.payload.people;
    case PEOPLE_ACTION_TYPES.LOAD_PEOPLE_FAILURE:
      return 'error';
    default:
      return state;
  }
};

export default peopleReducer;
