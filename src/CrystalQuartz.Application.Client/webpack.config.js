﻿var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: './index.ts',
    output: {
        filename: 'application.js',
        path: __dirname
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({ use: "css-loader" })
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader!less-loader" })
            },
            {
                test: /\.tmpl\.html$/, loader: "string-loader"
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    plugins: [
        new ExtractTextPlugin({ filename: "application.css", allChunks: true })
    ]
};