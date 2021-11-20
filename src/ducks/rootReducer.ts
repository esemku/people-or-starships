import { combineReducers } from 'redux';

import people from './people';
import starships from './starships';

const appReducer = combineReducers({
  people,
  starships,
});
export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
