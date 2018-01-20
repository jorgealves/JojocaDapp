const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: './jojoca_dapp/src/js/dapp.js',
    output: {
        path: path.resolve(__dirname, "jojoca_dapp/static"),
        filename: 'js/dapp.js'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ],
    },
    plugins: [
        new ExtractTextPlugin('css/styles.css')
    ]
};