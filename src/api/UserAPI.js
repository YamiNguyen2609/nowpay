import test from '../test';

const LOGIN_USER = '/driver/login';

const loginUser = (user, password) => {
  //return axios.post(LOGIN_USER, {user, passwd: md5(passwd)});

  return test.user;
};

export default {loginUser};
