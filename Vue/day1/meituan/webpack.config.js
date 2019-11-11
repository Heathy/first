// node内置模块, 专门去处理路径
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // 开发模式, 生产模式 production or development
    // 开发坏境会自动匹配非压缩的jquery.js
    // 生产环境会匹配压缩版本
    

    // 模式 (开发模式)
    mode: 'development',
    // 入口
    entry: './src/index.js',
    // 出口
    output: {
        // 输出的文件名为 bundle打包的模块文件
        filename: 'bundle.js',
        // 输出的位置
        path: path.resolve(_dirname,'dist')
    },
    // 加载器
    module: {
        rules: [{
            test: /\.txt$/,
            use: 'raw-loader'
        }, {
            test: /\.css$/,
            use: ['style-loader','css-loader']
        },{
            test: /\.scss$/,
            use: [{
                loader: "style-loader"// 将JS字符串生成为style节点
            }, {
                loader: "css-loader"// 将css转化成CommonJS 模块
            },{
                loader: "sass-loader"// 将Sass 编译成 css
            }]
        },{
            test: /\.html$/,
            use: 'html-loader'
        },{
            test: /\.js$/,
                exclude: /(node_modules|bowes_components)/,
                use: {
                    loader: 'babel-loader',
                    option: {
                        presets: ['@babel/preset-env']
                    }
                }
        }]
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    // 服务器
    devServer: {
        // 服务器文件夹位置
        contentBase: path.join(_dirnaem, "dist"),
        // 压缩
        compress: true,
        // 端口
        port: 9000
    }

}