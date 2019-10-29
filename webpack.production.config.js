const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.config.js');

module.exports = merge(baseConfig, {

    mode: "production",
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/client/index.html',
            filename: '../index.html' //to maintain public folder structure
        })
    ],

});
