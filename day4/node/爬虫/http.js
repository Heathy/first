const http = require('http')
//DOM操作
const jQuery = require('jquery')
// console.log({ JSDOM })
const request = require('request')
const fs = require('fs')
//模拟DOM
const { JSDOM } = require('jsdom')
const mock = (html) => {
    // 模拟出一个window
    const { window } = new JSDOM(html);
    let $ = jQuery(window);
    return $
}
http.get('http://www.umei.cc/p/gaoqing/cn/', (res) => {
    //res流
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => {
        rawData += chunk;
    });
    res.on('end', () => {
        let $ = mock(rawData);
        //用$去获取图片信息
        $("img").each((index, element) => {
            console.log($(element).attr('src'));
            let src = $(element).attr('src');
            //下载
            request({
                url: src,
                headers: {
                    //请求体,必须在域名为i1.zhiaigou.com发送请求
                    'Host': 'i1.zhiaigou.com'
                }
            }).pipe(fs.createWriteStream(`./images/${index}.jpg`))
        })
    })
})

// http.get(src, (res) => {
//     //读取流
//     res.pipe(fs.createWriteStream('images'))
// })