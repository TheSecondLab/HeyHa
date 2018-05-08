const Koa = require('koa');
const Webpack = require('webpack');
const serve = require('koa-static');
const path = require('path');
const bodyParser = require('koa-bodyparser');
const devMiddleware = require('koa-webpack-dev-middleware');
const hotMiddleware = require('koa-webpack-hot-middleware');
const convert = require('koa-convert');

const config = require('../build/webpack.dev');
const proxyMid = require('./proxyMid');
 
config.output.publicPath = '/';
config.entry = [].concat(config.entry).concat('webpack-hot-middleware/client');
const compiler = Webpack(config);

const app = new Koa();
app.keys = 'proxy';

app.use(bodyParser());
app.use(serve(path.resolve(__dirname, '../dist')));
// app.use(middleware({
//   compiler: compiler
// }));

app.use(proxyMid(['/admin/login', '/admin/chart/relation'], 'http://api.zjztty.com'))

app.use(convert(devMiddleware(compiler, {
  // noInfo: true,
  publicPath: config.output.publicPath
})));
app.use(convert(hotMiddleware(compiler)));

console.log('server started @ 8080');
app.listen(8080);