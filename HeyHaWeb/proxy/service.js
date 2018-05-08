const axios = require('axios');
const { URLSearchParams } = require('url'); 

module.exports = (url, data) => new Promise((resolve, reject) => {
  const params = new URLSearchParams();
  const keys = Object.keys(data);
  keys.forEach((key) => {
    params.append(key, data[key]);
  });
  console.log(params);

  axios.post(url, params.toString()).then(data => {
    resolve(data);
  }).catch(e => {
    reject(e);
  })
});

