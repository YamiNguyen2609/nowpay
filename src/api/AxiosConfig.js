import axios from 'axios';

import _ from 'lodash';
import BuildConfig from '../config/BuildConfig';
// import { _getToken } from '../../helpers/LocalStorage'

const api = axios.create({
  baseURL: '',
});

// api.interceptors.request.use(async config => {
//   const token = await _getToken()
//   config.headers.Authorization = 'Bearer ' + token
//   return config
// })

api.interceptors.response.use(
  response => response.data,
  error => {
    if (error.response) {
      return Promise.reject({
        message: 'Hệ thống đang update vui lòng thử lại sau',
      });
    }
  },
);

export default api;
