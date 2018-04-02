export const ADD_COUNT = 'ADD_COUNT';
export const REMOVE_COUNT = 'REMOVE_COUNT';

export default {
	[ADD_COUNT](state) {
		state.count++;
  },
  [REMOVE_COUNT](state) {
		state.count--;
  }
}
