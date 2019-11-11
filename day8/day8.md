# webpack

webpack的插件
```js
plugins: [
    new HtmlWebpackPlugPlugin = require('html-webpack-plugin')
]
```
上面这个插件就是帮你自动生成dist文件夹里面的index.html
将网页应用使用服务器打开,全局安装该模块,它会拥有一个新的命令webpack-dev-server

```bash
npm install webpack-dev-server -g
```
```js
devServer: {
    contentBase: path.join(_dirname,"dist"),
    compress: true,
    port: 9000
}
```
之前打包使用webpack命令webpack-dev-server,打开http://localhost:9000/ 浏览网页