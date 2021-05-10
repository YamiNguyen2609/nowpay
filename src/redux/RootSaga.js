import {fork, all} from 'redux-saga/effects';

import loginUser from './user/sagas/loginUser';
import subscribeTopic from './mqtt/sagas/subscribeTopic';

export default function* rootSaga() {
  yield all([fork(loginUser), fork(subscribeTopic)]);
}
