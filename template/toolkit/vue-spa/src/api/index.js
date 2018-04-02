import axios from 'axios';

export const getList = () => axios({ 
  url: 'https://api.github.com/users'
}).then(res => res.data);