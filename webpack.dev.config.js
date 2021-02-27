const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.config.js');

module.exports = merge(baseConfig, {
    mode: "development",

    devServer: {
        contentBase: path.join(__dirname, 'public'),
        watchContentBase: true,
        proxy: [
            {
                context: ['/api', '/auth'],  // can have multiple
                target: 'http://localhost:3000', //server and port to redirect to
                secure: false //don't use https
            }
        ],
        port: 8080, // port webpack-dev-server listens to, defaults to 8080
        overlay: {
            warnings: true,
            errors: true,
        },
    },
});
