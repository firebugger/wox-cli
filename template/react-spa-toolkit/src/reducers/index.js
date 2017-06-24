import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import users from './users';

const rootReducer = combineReducers({
  users,
  router: routerReducer
});

export default rootReducer;
