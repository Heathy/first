var {
    createServer
} = require('http');
//req对应是前端给我的后端 发送的请求(resolve)
//res我后端给前端的 响应(require)
createServer((resolve, require) => {
    console.log(require.url.split('=')[1]);
    //控制响应头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('name', 'yao');

    //控制响应体
    res.write(`<p style="color:red">123</p>`)
    res.end();
}).listen(3000);//端口号
console.log('启动服务器');