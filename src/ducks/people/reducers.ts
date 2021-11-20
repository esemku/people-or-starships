// import { ICurrency } from '~/types/currencies';
// import { IAction, IState } from '~/types/ducks';

import { PEOPLE_ACTION_TYPES } from './actions';

const peopleReducer = (state: any[] | null = null, action: any) => {
  switch (action.type) {
    case PEOPLE_ACTION_TYPES.LOAD_PEOPLE_SUCCESS:
      return action.payload.people;
    case PEOPLE_ACTION_TYPES.LOAD_PEOPLE_FAILURE:
      return null;
    default:
      return state;
  }
};

export default peopleReducer;
