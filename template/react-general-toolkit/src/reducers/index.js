import { fromJS } from 'immutable';
import { FEATCH_LIST_SUCCESS } from '../actions';

const defaultState = {
  list: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case FEATCH_LIST_SUCCESS:
      return fromJS(state).set('list', action.payload).toJS();
    default:
      return state;
  }
}
