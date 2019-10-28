const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
// 导入压缩css的插件
const optimizeCss = require('optimize-css-assets-webpack-plugin');
// 导入每次删除dist文件夹的插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
// 导入压缩js文件的插件
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// 导入抽取css文件的插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: { // 配置入口节点
        app: path.join(__dirname, './src/main.js'),
        vendors: ['jquery']  //把要抽离的第三方报的名称，放到这个数组中
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'js/[name].js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename:  'index.html',
            minify: {
                collapseInlineTagWhitespace: true, // 合并多余的空格
                removeComments: true,  // 移除注释
                removeAttributeQuotes: true, // 移除双引号
            }
        }),
        new optimizeCss({
            cssProcessor: require('cssnano'), //引入cssnano配置压缩选项
            cssProcessorOptions: { 
            	discardComments: { removeAll: true } 
            },
            canPrint: true //是否将插件信息打印到控制台
        }),
        new CleanWebpackPlugin(),  // 配置打包删除dist文件重新生成
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendors', //指定要抽离的入口文件
        //     filename: 'vendors.js'  // 将来在发布的时候，除了会有一个bundle.js,还会有一个vendors.js文件，里面存放了所有的第三方包
        // })
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: { // 配置压缩选项
        //         warnings: false 
        //     }
        // }),
        new webpack.DefinePlugin({  // 设置为产品上线环境，进一步压缩JS代码
            'process.env.NODE_ENV': "production"
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }) //抽取css样式表
    ],
    optimization: {
        splitChunks: {
            // chunks: 'all',
            cacheGroups:{
                name: 'vendors', //指定要抽离的入口文件
                filename: 'vendors.js',   // 将来在发布的时候，除了会有一个bundle.js,还会有一个vendors.js文件，里面存放了所有的第三方包
            }     
        },
        // webpack4 配置压缩js 需要下载uglifyjs-webpack-plugin 插件
        minimizer: [
            new UglifyJSPlugin({
                uglifyOptions: {  // 配置压缩选项
                      warnings: false, // 移除警告
                }
            }),
        ]
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../' //指定抽取的时候，自动化为我们的路径加上../ 前缀
                        }
                   },
                  'css-loader',
                  'sass-loader',
                ],
              },
            {test:/\.(png|gif|bmp|jpg)$/, use: ['url-loader?limit=5000&name=images/[hash:8]-[name].[ext]']},
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/}
        ]
    }
}