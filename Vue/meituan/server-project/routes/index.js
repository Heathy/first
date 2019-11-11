var express = require('express');
var router = express.Router();
const {
  find,
  insert,
  remove,
  update
} = require('../db/db');
/* GET home page. */
router.get('/entries', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('element');
  res.json(data);
});

router.get('/restaurants', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('restaurants');
  res.json(data);
});

router.get('/login', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let key = req.query.token
  const token = Buffer.from(key, 'base64').toString('utf8')
  console.log(JSON.parse(token))
  res.send(token);
});

router.get('/meituan', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  console.log(111)
  let data = await find('meituan');
  res.json(data);
});

router.get('/user', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  console.log(req.query)
  let user = req.query.username;
  let psd = req.query.password;
  let data = await find('user', { username: user, password: psd });
  if (data.length) {
    res.json('1')//可以登入
  } else {
    res.json('0')//不能登入
  }
  res.json(data);
  console.log(data)
});

router.get('/regs', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  console.log(req.query)
  let user = req.query.user;
  let psd = req.query.pass;

  let data = await find('user', { username: user });
  if (data.length) {
    res.json('1')//不给注册
  } else if (user && psd) {
    console.log(user, psd);
    await insert('user', [{ username: user, password: psd }])
    res.json('0')// 可以注册并且把数据插入mongodb
  } else {
    res.json('0')// 可以注册
  }
});
router.get('/regss', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  console.log(req.query)
  let user = req.query.user;
  let psd = req.query.pass;
  await insert('user', [{ username: user, password: psd }])
  res.json('0')// 可以注册

});
// 商品从列表页跳转到详情页 gid
router.get('/gid', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  console.log(222)
  let gid = req.query.gid;
  let result = await find('meituan', { gid });
 
  console.log(result)
  res.json(result)

})

module.exports = router;