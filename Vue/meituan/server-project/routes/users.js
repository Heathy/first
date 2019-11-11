const express = require('express');
const Router = express.Router();

const {
  mongo
} = require('../db/db');
const {
  formatData,
  token
} = require('../utils');
/**
 * 用户CRUD
 * 增：C（Create）
 * 删：D（Delete）
 * 改：U（Update）
 * 查：R（Retrieve）
 */

//注册
Router.post('/reg', async (req, res) => {
  let {
    username,
    password
  } = req.body;
  let result;
  try {
    await mongo.create('user', [{
      username,
      password,
      regtime: new Date()
    }]);
    // console.log(111);
    result = formatData();
  } catch (err) {
    result = formatData({
      code: 0
    })
  }
  res.send(result);
})
Router.get('/', async (req, res) => {
  let result = await mongo.find('user');
  res.send(result);
})
//登录
Router.get('/login', async (req, res) => {
  let {
    username,
    password,
    checked2
  } = req.query;
  // console.log(req.query);
  let result = await mongo.find('user', {
    username,
    password
  });
  if (result.length > 0) {
    // 如用户需要免登陆操作，则生成一个token并返回给前端
    let Authorization
    if (checked2) {
      Authorization = token.create(username)
    }
    // console.log(Authorization);
    res.send(formatData({
      data: Authorization
    }));
  } else {
    res.send(formatData({
      code: 0
    }))
  }
})
// 验证账号
Router.get('/check', async (req, res) => {
  let {
    username
  } = req.query;
  // console.log(req.query);
  let result = await mongo.find('user', {
    username
  });
  if (result.length) {
    res.send(formatData({
      code: 0
    }))
  } else {
    res.send(formatData());
  }

});
// 注销账号
Router.get('/logoff', async (req, res) => {
  let {
    username
  } = req.query;
  let result = await mongo.remove('user', {
    username
  });
  res.send(result);
})
module.exports = Router;