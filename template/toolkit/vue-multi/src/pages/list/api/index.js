import fetch from '@/utils/fetch';

export const fetchData = ({ url, method = 'post', data }) => fetch({
  url,
  method,
  data: {
    ...data,
  },
});
