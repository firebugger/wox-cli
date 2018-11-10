import { fetchData } from '../api';
import { CHANGE_LOADING, SET_DATA } from './mutations';

export default {
  async fetchData({ commit, state }) {
    try {
      let res = await fetchData();
      if (res.code == 0) {
        commit(CHANGE_LOADING, false);
        commit(SET_DATA, res.data.groupBOList);
      } else {
        console.log(`获取数据出错！${res.message}`);
      }
    } catch (error) {
      console.log(`获取数据出错！${error}`);

      // mock
      commit(CHANGE_LOADING, false);
      commit(SET_DATA, [{
        photo: '//img1.quimg.com/upload/201810/1540277886691.jpg?t=1541810626',
        url: 'http://app.lulutrip.com/album/2019count'
      }, {
        photo: '//img1.quimg.com/upload/201810/1539668685520.jpg?t=1541810626',
        url: 'http://app.lulutrip.com/album/uswestnp'
      }]);
    }
  },
}
