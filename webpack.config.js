const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoader = require('vue-loader');
const path = require('path');

module.exports = {
    entry: './src/main.js',
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new VueLoader.VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    output: {
        filename: 'SpotifyDemo.js',
        path: path.resolve(__dirname, 'dist')
    }
};