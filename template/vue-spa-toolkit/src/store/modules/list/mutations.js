export const ADD_COUNT = 'ADD_COUNT';
export const REMOVE_COUNT = 'REMOVE_COUNT';
export const GET_LIST = 'GET_LIST';

export default {
	[ADD_COUNT](state) {
		state.count++;
  },
  [REMOVE_COUNT](state) {
		state.count--;
  },
  [GET_LIST](state, payload) {
    state.list = payload.list || [];
  }
};
