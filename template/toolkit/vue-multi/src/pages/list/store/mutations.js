export const CHANGE_STATE = 'CHANGE_STATE';

export default {
  [CHANGE_STATE](state, payload) {
    state[payload.key] = payload.value;
  },
};
