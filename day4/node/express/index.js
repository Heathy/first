const express = require('express')
const http = require('http')
//创建的app对象 express()应用的逻辑会从这个对象开始
const app = express()
//request -> req
//response -> res
//app.get 如果前端发送的是get请求的话，那就会被我这个函数给拦截
app.get('/index', (req, res) => {
    res.send('hello world')
})
//xxxx.php
app.get('/home', (req, res) => {
    res.send('路由发送成功，请求的url为http://localhost:3000/home')
})
//路由 路的来由
app.post('/mine', (req, res) => {
    res.send('路由发送成功，post请求发送成功')
})

http.createServer(app).listen(3000)
console.log('启动服务器')