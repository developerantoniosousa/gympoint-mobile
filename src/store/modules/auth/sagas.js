import { takeLatest, all, call, put } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '~/services/api';

import { signInSuccess, signInFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { id } = payload;
    yield call(api.get, `/students/${id}`);

    yield put(signInSuccess(id));
  } catch (err) {
    Alert.alert('Falha na verificação', 'Verifique seu ID')
    yield put(signInFailure());
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);
