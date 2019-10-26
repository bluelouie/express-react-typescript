const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: 'src/client/index.tsx',
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'public/javascript')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/client/index.html',
            filename: '../index.html' //
        })
    ],
    resolve: {
        modules: [__dirname, 'src', 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: require.resolve('babel-loader')
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, 'public'),
        watchContentBase: true,
        proxy: [
            {
                context: ['/api', '/auth'],  // can have multiple
                target: 'http://localhost:3000/', //server and port to redirect to
                secure: false //don't use https
            }
        ],
        port: 8080, // port webpack-dev-server listens to, defaults to 8080
        overlay: {
            warnings: true,
            errors: true,
        },
    },

};