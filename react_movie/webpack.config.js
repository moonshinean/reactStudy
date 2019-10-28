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
            {test:/\.css$/, use: ['style-loader', 'css-loader']}, //通过 为css-loader添加 modules 参数，启用css的模块化
            {test:/\.scss$/, use: ['style-loader', {
                loader:'css-loader',
                // css-loader 2 以及 以上的新版本。css模块化写法如下，设置名称localIdentName 属性为Modules的属性
                options: {
                    modules: {
                        localIdentName: '[name]_[local]-[hash:5]'
                    }
                    // localIdentName: '[name]_[local]-[hash:base64:5]',
                }},'sass-loader']},
            {test:/\.(png|gif|bmp|jpg)$/, use: ['url-loader?limit=5000']},
            {test: /\.jsx?$/, use: 'babel-loader', exclude: /node_modules/}
        ]
    }
}