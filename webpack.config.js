const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './ts/src/index.ts',
    module: {
        rules: [
            {test: /\.tsx?$/, loader: 'ts-loader'},
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'site'),
    },
    devtool: 'source-map',
    plugins: [
        new CopyWebpackPlugin([
            {from: './layout/index.html', to: './index.html'},
        ]),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'site'),
        port: 8000,
    },
};
