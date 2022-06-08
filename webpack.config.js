const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        filename: 'js/index.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        liveReload: true,
        hot: true,
        open: true,
        static: ['./src'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: "css", to: "css" },
                { from: "fonts", to: "fonts" },
                { from: "images", to: "images" },
            ],
        }),
    ]
};