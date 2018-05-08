const { URL } = require('url');
// const axios = require('axios');
const post = require('./service');

const proxyMid = (whiteList, targetUrl) => async(ctx, next) => {
  if(!Array.isArray(whiteList) || whiteList.length === 0) {
    console.log('There is no whiteList or whitList is empty.')
    return next();
  }

  const { path } = ctx.request;
  console.log('path:', path)
  if(whiteList.indexOf(path) === -1) {
    console.log(`Path<${path}> is not listed in the proxy list`)
    return next();
  }

  try {
    const proxyUrl = new URL(targetUrl);
  } catch(e) {
    // console.error(`TargetUrl<${targetUrl}> is a invalid URL, please check`);
    return next();
  }

  console.log('client cookie',ctx.cookies.get('xxx_sid'));
  
  const data = await post(`${targetUrl}${path}`, ctx.request.body, {
    headers: {
      'Cookie': `xxx_sid=${ctx.cookies.get('xxx_sid')}; Domain=.zjztty.com; Path=/; HttpOnly`
    }
  });
  // console.log(data);
  // console.log(data.headers.getCookie('xxx_sid'))
  const serverCookie = data.headers['set-cookie'];
  console.log('server cookie',serverCookie)
  // const serverCookie = data.headers['set-cookie'];
  if(Array.isArray(serverCookie)) {
    const xxx_sid = serverCookie.filter(item=> item.indexOf('xxx_sid') >=0)[0].split('; ').filter(item=>item.indexOf('xxx_sid')>=0)[0];
    const value = xxx_sid.substr(xxx_sid.indexOf('=')+1)

    ctx.cookies.set('xxx_sid', value)
  }
  ctx.body = data.data;
  ctx.stats = 200;
}

module.exports = proxyMid;