var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: ['./src/index.js'],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            warnings: false
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    module: {
        loaders: [{
            test: /\.css$/,
            loaders: 'style-loader!css-loader'
        }]
    }
};