import fetch from '@/utils/fetch';

export const fetchData = ({ url, method = 'get', data, params }) => fetch({
  url,
  method,
  data: {
    ...data,
  },
  params: {
    ...params
  }
});
