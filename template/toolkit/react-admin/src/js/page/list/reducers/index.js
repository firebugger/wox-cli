import { fromJS } from 'immutable';
import { FETCH_LIST_SUCCESS } from '../actions';

const defaultState = {
  list: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
  case FETCH_LIST_SUCCESS:
    return fromJS(state).set('list', action.payload).toJS();
  default:
    return state;
  }
}
