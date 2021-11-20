// import { ICurrency } from '~/types/currencies';
// import { IAction, IState } from '~/types/ducks';

import { STARSHIPS_ACTION_TYPES } from './actions';

const starshipsReducer = (state: any[] | null = null, action: any) => {
  switch (action.type) {
    case STARSHIPS_ACTION_TYPES.LOAD_STARSHIPS_SUCCESS:
      return action.payload.starships;
    case STARSHIPS_ACTION_TYPES.LOAD_STARSHIPS_FAILURE:
      return null;
    default:
      return state;
  }
};

export default starshipsReducer;
