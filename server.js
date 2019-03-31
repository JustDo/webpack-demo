const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackDevServer = require('webpack-dev-server');
const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);


const options = {
    contentBase: './dist',
    hot: true,
    host: 'localhost'
}

webpackDevServer.addDevServerEntrypoints(config, options);
const server = new webpackDevServer(compiler, options);

server.listen(5000,'localhost',()=>{
    console.log('dev server listening on port5000');
})

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

app.listen(3000, function() {
    console.log('Example app listening on port 3000');
})
