export const CHANGE_LOADING = 'CHANGE_LOADING';
export const SET_DATA = 'SET_DATA';

export default {
  [CHANGE_LOADING](state, payload) {
    state.loading = payload;
  },
  [SET_DATA](state, payload) {
    state.banner = payload;
  },
};
