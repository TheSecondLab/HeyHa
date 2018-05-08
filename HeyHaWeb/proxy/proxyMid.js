const proxy = require('http-proxy-middleware');

// proxy middleware options
const options = {
  target: 'http://api.zjztty.com', // target host
  changeOrigin: true,               // needed for virtual hosted sites
  cookieDomainRewrite: {
    "old.domain": ".zjztty.com",
    "*": ""
  },
  pathRewrite: (path, req) => path.replace('/api', '/')
  // pathRewrite: {
  //   '^/api/admin/login': '/admin/login',           // remove base path
  //   '^/api/admin/chart/relation': '/admin/chart/relation'
  // }
};
 
module.exports = proxy(options);

