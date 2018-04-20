const axios = require('axios');

const domain = 'http://test.hu0572.cn';

const post = (path, data) => new Promise((resolve, reject) => {
  var params = new URLSearchParams();
  const keys = Object.keys(data);
  keys.forEach((key) => {
    params.append(key, data[key]);
  });

  axios.post(`${domain}/${path}`, params)
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
