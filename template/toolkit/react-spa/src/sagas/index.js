import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import {
  FETCH_USERS,
  fetchUsers,
  fetchUsersSuccess,
  fetchUsersFail
} from '../actions/users';

const fetchData = data => axios(data).then(res => res.data);

function* fetchUserList() {
  try {
    const res = yield call(fetchData, {
      url: 'https://api.github.com/users'
    });
    yield put(fetchUsersSuccess(res));
  } catch (err) {
    yield put(fetchUsersFail(err));
  }
}

export default function* rootSaga() {
  yield [
    takeLatest(FETCH_USERS, fetchUserList),
  ];
}
