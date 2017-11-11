const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: __dirname,
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    resolve: {
        extensions: ['.js', '.css']
    },

    module: {
        rules: [
            {
                test: /\.js?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(css|less)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!less-loader"
                })
            },
            {
                test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
                use: 'file-loader'
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            __ROOT__: "'/viking/'"
        }),
        new ExtractTextPlugin("bundle.css")
    ]
};