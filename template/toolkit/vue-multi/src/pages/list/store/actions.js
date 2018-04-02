import { getList } from '@/api';
import { GET_LIST } from './mutations';

export default {
  async getUserList({ commit, state }) {
    let res =  await getList();
    commit(GET_LIST, {list: res});
  }
}