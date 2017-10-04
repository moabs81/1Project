var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var liveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    devtool: 'cheap-eval-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new liveReloadPlugin()
    ],
    module: {
        loaders: [{
            test: /\.css$/,
            loaders: 'style-loader!css-loader'
        }]
    },
    devServer: {
        contentBase: './dist',
        hot: true
    }
}