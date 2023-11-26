import { combineReducers } from 'redux';

import usersReducer from './users/reducers';

const rootReducer = combineReducers({
  users: usersReducer
});

export default rootReducer;
