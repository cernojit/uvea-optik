const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, './src/index.js'),
	output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/'
    },
    mode: 'none',
    module: {
        rules: [
            {
              test: /\.(png|jpg)$/,
              use: [
                  'file-loader'
              ]
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
              test: /\.css$/,
              use: [
                  MiniCssExtractPlugin.loader, 'css-loader'
              ]
            },
            {
              test: /\.scss$/,
              use: [
                  MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
              ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/preset-react' ],
                        plugins: [ '@babel/plugin-proposal-class-properties' ]
                    }
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'Dagmar Lupínková',
            description: 'Oficiální stránky Dagmar Lupínkové',
            template: './public/index.hbs'
        }),
        new CleanWebpackPlugin()
    ]
}