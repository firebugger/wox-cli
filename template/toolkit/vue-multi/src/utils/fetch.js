import axios from 'axios';

export default (params) => {
  return axios({
    ...params
  }).then(res => res.data);
}
