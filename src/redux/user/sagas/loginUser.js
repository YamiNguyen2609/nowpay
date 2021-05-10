import {takeEvery, put} from 'redux-saga/effects';
import r from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {Colors} from '../../../themes';
import {ACTION, onFailure, onSuccess} from '../redux/loginUser';
import UserAPI from '../../../api/UserAPI';
import {flagIndicator} from '../../app';

function* loginUser(action) {
  try {
    yield put(flagIndicator(true, {color: Colors.appColor}));

    const res = yield UserAPI.loginUser(action['username'], action['password']);

    yield put(flagIndicator(false));
    if (res.isSuccess) {
      yield put(onSuccess(res.data));
    }
  } catch (error) {
    r.log(error);
    yield put(flagIndicator(false));
    yield put(onFailure(JSON.stringify(error)));
  }
}

export default function* saga() {
  yield takeEvery(ACTION, loginUser);
}
