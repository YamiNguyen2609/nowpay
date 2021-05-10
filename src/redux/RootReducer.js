import {combineReducers} from 'redux';

import app from './app';
import navigation from './navigation';
import loginUser from './user/redux/loginUser';
import subscribeTopic from './mqtt/redux/subscribeTopic';

const rootReducer = combineReducers({
  app,
  navigation,
  loginUser,
  subscribeTopic,
});

export default rootReducer;
