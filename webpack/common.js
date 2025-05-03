const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: {
        main: `${paths.src}/js/main.js`,
    },
    output: {
        path: paths.build,
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: `${paths.src}/index.html`,
            filename: 'index.html',
        }),
        new ESLintPlugin({
            extensions: ['js'],
            exclude: ['/node_modules/'],
            fix: true,
            emitWarning: true,
            failOnError: false,
            overrideConfigFile: `${__dirname}/../eslint.config.js`,
        }),
    ],
};