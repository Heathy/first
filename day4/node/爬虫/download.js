const fs = require('fs')
const http = require('http')
//模拟发送请求
const request = require('request')
http.get('http://i1.zhiaigou.com/uploads/tu/201910/10165/7c465f4606_223.jpg', {
    headers: {
        //请求体, 必须在域名为i1.zhiaigou.com发送请求
        'Host': 'i1.zhiaigou.com'
    }

}, (res) => {
    //读取流
    res.pipe(fs.createWriteStream('file.jpg'))
})

//模拟发送
request({
    url: 'http://i1.zhiaigou.com/uploads/tu/201910/10165/7c465f4606_223.jpg',
    headers: {
        //请求体,必须在域名为i1.zhiaigou.com发送请求
        'host': 'i1.zhiaigou.com'
    }
}).pipe(fs.createWriteStream('doodle.png'))