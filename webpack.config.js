const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './public/js/app.js',
    output: {
        path: path.join(__dirname, '/public/dist/js/'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new webpack.NoEmitOnErrorsPlugin()
    ]
};
