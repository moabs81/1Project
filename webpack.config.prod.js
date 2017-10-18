var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

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
            title: 'Production Template',
            template: './src/index.html',
            chunks: {

            }
        }),
        new HtmlWebpackIncludeAssetsPlugin({
            assets: ['bundle.js'],
            append: false,
            publicPath: 'https://tsps.ncsecu.local/demo/s22307n/SiteAssets/'
        }),
        new webpack.ProvidePlugin({
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
            'jQuery': 'jQuery',
            '$': 'jQuery'
        })
    ],
    module: {
        loaders: [{
            test: /\.css$/,
            loaders: 'style-loader!css-loader'
        }]
    }
};