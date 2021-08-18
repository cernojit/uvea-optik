const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');


module.exports = {
    entry: path.resolve(__dirname, "./src/index.js"),
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/'
    },
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        index: 'index.html',
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|woff|woff2)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            url: true,
                        }
                    }
                ],
                type: 'javascript/auto'
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/preset-react' ],
                        plugins: [ '@babel/plugin-proposal-class-properties' ]
                    }
                }]
            },
            {
                test: /\.svg$/,
                use: [
                  {
                    loader: 'svg-url-loader',
                    options: {
                      limit: 10000,
                    },
                  },
                ],
            },
            {
                test: /\.ico$/, 
                use: [{
                    loader: 'file-loader?name=[name].[ext]'
                }]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.html'
        }),
        new Dotenv({
            path: './.env.production.local',
            save: true
        }),
        new FaviconsWebpackPlugin(__dirname + '/public/favicon.ico')
    ]

};
