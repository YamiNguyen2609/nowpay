import axios from 'axios';

import _ from 'lodash';

const api = axios.create({
  timeout: 15000,
  baseURL: 'https://vmapi.sbplogistics.com',
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
