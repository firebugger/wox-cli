/**
 * reducers
 */
import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL
} from '../actions/users';

const initialState = {
  loading: false,
  userList: []
};

const users = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USERS:
      return Object.assign({}, state, { loading: true });
    case FETCH_USERS_SUCCESS:
      const newState = Object.assign({}, state, { userList: action.data, loading: false });
      return newState;
    case FETCH_USERS_FAIL:
      return Object.assign({}, state, { loading: false });
    default:
      return state;
  }
}

export default users;
