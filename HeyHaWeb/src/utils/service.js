const axios = require('axios');

const domain = 'http://api.zjztty.com';
// const domain = '/api';

const post = (path, data) => new Promise((resolve, reject) => {
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
      if(response.status && response.data.status === 'SUCCESS')
        resolve(response.data.data);
      else
        reject('系统错误，请稍后重试');
    })
    .catch(function (error) {
      reject('系统错误，请稍后重试');
    });
});

module.exports = { post };
