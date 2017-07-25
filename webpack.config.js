var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: { path: __dirname+'/build', filename: 'bundle.js' },
    module: {
        loaders: [
        {
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        },
        {
            test: /\.css$/,
            loader: 'style-loader',
        },
        {
            test: /\.css$/,
            loader: 'css-loader',
            query: {
                modules: true,
                localIdentName: '[name]__[local]__[hash:base64:5]'
            }
        },
        {
            test: /\.css$/,
            exclude: /node_modules/,
            loader: 'postcss-loader'
        }
        ]
    },
    node: {
        fs: 'empty',
        tls: 'empty',
        net: 'empty'
    },
    devtool: "eval",
    plugins: [
        new ExtractTextPlugin('[name].bundle.css'),
    ],
    // inline-source-map to add sourceMaps, cheap-eval-source-map to fast
};