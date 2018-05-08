// include dependencies
const express = require('express');
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const hotMid = require("webpack-hot-middleware");

const config = require('../build/webpack.dev');
const proxyMid = require('./proxyMid');
 
const compiler = webpack(config);
const app = express();

app.use('/api', proxyMid);
app.use(middleware(compiler));
app.use(hotMid(compiler));

app.listen(8080);