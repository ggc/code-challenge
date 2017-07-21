var path = require('path');
var webpack = require('webpack');

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
            use: [
                'style-loader',
                { loader: 'css-loader', options: { importLoaders: 1 } },
                'postcss-loader'
            ]
        }
        ]
    },
    node: {
        fs: 'empty',
        tls: 'empty',
        net: 'empty'
    },
    devtool: "eval"
// inline-source-map to add sourceMaps, cheap-eval-source-map to fast
};