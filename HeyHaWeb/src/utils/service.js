const axios = require('axios');

const domain = 'http://api.zjztty.com';
// const domain = '/api';

const post = (path, data, timeOut) => new Promise((resolve, reject) => {
  // var params = new URLSearchParams();
  // const keys = Object.keys(data);
  // keys.forEach((key) => {
  //   if (Array.isArray(data[key])) {
  //     data[key].forEach((item) => {
  //       params.append(key, item)
  //     });
  //     return
  //   }
  //   params.append(key, data[key]);
  // });
  let params = '';
  const keys = Object.keys(data);
  keys.forEach((key) => {
    if (Array.isArray(data[key])) {
      data[key].forEach((item) => {
        // params.append(key, item)
        params += `${key}=${item}&`;
      });
      return
    }
    // params.append(key, data[key]);
    params += `${key}=${data[key]}&`;
  });

  params = params.substr(0, params.length);

  axios.post(`${domain}${path}`, params)
    .then(function (response) {
      if(response.status && response.data.status === 'SUCCESS') {

        resolve(response.data.data);
        return;
      }
      if(response.data.status === 'SESSION_OUT') {
        sessionOut(timeOut);
      } else {
        reject('系统错误，请稍后重试');
      }
    })
    .catch(function (error) {
      reject('系统错误，请稍后重试');
    });
});

const sessionOut = (timeOut) => {  
  timeOut()
}

const $axios = axios.create({
  timeout: 5000,
  headers: {
      'Content-Type': 'application/json;'
  }
});

const $post = (path, data, timeOut) => new Promise((resolve, reject) => {
  $axios.post(`${domain}${path}`, data)
    .then(function (response) {
      if(response.status && response.data.status === 'SUCCESS') {
        resolve(response.data.data);
        return;
      }
      if(response.data.status === 'SESSION_OUT') {
        sessionOut(timeOut);
      } else {
        reject('系统错误，请稍后重试');
      }
    })
    .catch(function (error) {
      reject('系统错误，请稍后重试');
    });
});

const Out = () => <div>过期了！</div>

module.exports = { post, $post };
