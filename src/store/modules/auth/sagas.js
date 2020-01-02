import { takeLatest, all, call, put } from 'redux-saga/effects';

import api from '~/services/api';

export function* signIn({ payload }) {
  try {
    const { id } = payload;
    // const response = yield call();

    yield put(signInSuccess());
  } catch (err) {
    yield put(signInFailure());
  }
}

export default all([
  // takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);
