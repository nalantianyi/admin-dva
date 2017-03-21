/**
 * Created by nalantianyi on 2017/3/7.
 */
var path = require('path');
var webpack = require('webpack');
var productRoot = path.resolve(__dirname, '../');
var webRoot = path.resolve(productRoot, 'web');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractAntd = new ExtractTextPlugin('[name]-antd.css');
const extractMy = new ExtractTextPlugin('[name]-my.css');
const svgDirs = [
    require.resolve('antd').replace(/warn\.js$/, ''), // 1. 属于 antd-mobile 内置 svg 文件
    path.resolve(__dirname, '../web/svg'),  // 2. 自己私人的 svg 存放目录

];

module.exports = {
    devtool: 'cheap-source-map',
    context: webRoot,
    entry: {
        main: ['./index.js','babel-polyfill']
    },
    output: {
        publicPath: "/public/assets/",
        filename: '[name].js',
        path: path.resolve(productRoot, 'app/public/assets')
    },
    resolve: {
        extensions: ['.web.js', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'babel-loader',
                ],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                use: extractAntd.extract(['css-loader', 'postcss-loader' ]),
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: extractMy.extract([{loader:'css-loader',options:{modules:true}}, 'postcss-loader' ])
            },
            {
                test: /\.(jpeg|jpg|png|gif)$/,
                use: 'url-loader?limit=8192'
            },
            {
                test: /\.(svg)$/i,
                use: 'svg-sprite-loader',
                include: svgDirs,  // 把 svgDirs 路径下的所有 svg 文件交给 svg-sprite-loader 插件处理
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            chunks: ['main','vendor'],
            filename: '../../view/index.html',
            title: 'Admin-AntD',
            template: '../template/index.html'
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    pxtorem({
                        rootValue: 100,
                        propWhiteList: [],
                    }),
                    autoprefixer({browsers: ['last 2 versions']})
                ]
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
                // 该配置假定你引入的 vendor 存在于 node_modules 目录中
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        extractAntd,
        extractMy
    ]
};