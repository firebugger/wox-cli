import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  count: 0,
  list: []
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
};
