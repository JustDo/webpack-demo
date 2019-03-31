const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');


module.exports = {
    entry: {
        app: './src/index.js',
    },
    devtool: 'inline-source-map',

    plugins: [
        new CleanWebpackPlugin(), //清理dist
        new HtmlWebpackPlugin({ //在dist 目录生成html,当entry 修改或添加名称时，用它重新生成html, 将新名称引入
            title: 'Hot Module Replacement'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath:"/"
    },

};
