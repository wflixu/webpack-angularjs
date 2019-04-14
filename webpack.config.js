
// Modules
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');




module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'eval-source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },
        {
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
            loader: 'file-loader'
        },
        {
            test: /\.html$/,
            loader: 'raw-loader'
        }]
    },
    devServer: {
        port: 3000,
        progress: true,
        contentBase: './public',
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            hash: true
        })
    ]

}

