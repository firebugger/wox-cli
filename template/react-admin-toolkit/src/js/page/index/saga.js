import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import reqwest from 'reqwest';
import { actions, FEATCH_LIST } from './actions';

const fetchData = data => reqwest(data).then(res => res);

function* fetchList() {
  try {
    const res = yield call(fetchData, {
      url: 'https://api.github.com/users',
    });
    if (res.length) {
      yield put(actions.featchListSuccess(res));
    } else {
      throw new Error('貌似出错了...');
    }
  } catch (err) {
    throw new Error(err);
  }
}

export default function* rootSaga() {
  yield [
    takeLatest(FEATCH_LIST, fetchList),
  ];
}
