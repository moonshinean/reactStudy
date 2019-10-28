const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

const optimizeCss = require('optimize-css-assets-webpack-plugin');


module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename:  'index.html'
        }),
        new optimizeCss({
            cssProcessor: require('cssnano'), //引入cssnano配置压缩选项
            cssProcessorOptions: { 
            	discardComments: { removeAll: true } 
            },
            canPrint: true //是否将插件信息打印到控制台
        })
    ],
    module: {
        rules: [
            {test:/\.css$/, use: ['style-loader', 'css-loader']},
            {test:/\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            {test:/\.(png|gif|bmp|jpg)$/, use: ['url-loader?limit=5000']},
            {test: /\.jsx?$/, use: 'babel-loader', exclude: /node_modules/}
        ]
    }
}