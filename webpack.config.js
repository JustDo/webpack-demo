const path = require('path');
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        another: './src/another-module.js'
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Code Splitting'
        }),
        new webpack.optimize.SplitChunksPlugin({
           cacheGroups: {

               //打包重复出现的代码
               vendor: {
                   chunks: 'initial',
                   minChunks: 2,
                   maxInitialRequests: 5, // The default limit is too small to showcase the effect
                   minSize: 0, // This is example is too small to create commons chunks
                   name: 'vendor'
               },

           }
       }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
