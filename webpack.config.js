const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: path.resolve('./jojoca_dapp/src/js/index.js'),
    output: {
        path: path.resolve(__dirname, "jojoca_dapp/static"),
        filename: 'js/dapp.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            // WARNING: not working, yet
            {
                test: /\.sol$/,
                use: [
                    {
                        loader: `truffle-solidity-loader?migrations_directory=${path.resolve(__dirname, 'migrations')}`
                    }
                ]
            }
        ],
    },
    plugins: [
        new ExtractTextPlugin('css/styles.css')
    ],
    devServer: {
        contentBase: [
            "public",
            "static"
        ]
    },
    devtool: 'source-map'
};