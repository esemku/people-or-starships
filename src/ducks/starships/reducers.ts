import { IStarshipsState } from 'types/ducks';
import { ActionLoadStarships, STARSHIPS_ACTION_TYPES } from './actions';

const starshipsReducer = (
  state: IStarshipsState[] | null = null,
  action: ActionLoadStarships,
) => {
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
