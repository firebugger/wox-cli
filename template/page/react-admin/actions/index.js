// action types
export const FETCH_LIST = 'FETCH_LIST';
export const FETCH_LIST_SUCCESS = 'FETCH_LIST_SUCCESS';

// action creator
export const actions = {
  fetchList: () => ({
    type: FETCH_LIST,
  }),
  fetchListSuccess: data => ({
    type: FETCH_LIST_SUCCESS,
    payload: data,
  }),
};
