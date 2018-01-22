const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: './jojoca_dapp/src/js/dapp.js',
    output: {
        path: path.resolve(__dirname, "jojoca_dapp/static"),
        filename: 'js/app.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    }
};