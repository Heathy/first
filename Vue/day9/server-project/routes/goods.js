const express = require('express');

const Router = express.Router();
const {
    mongo
} = require('../db');

/*
    商品数据的：CRUD
        * 增：C（Create）
        * 删：D（Delete）
        * 改：U（Update）
        * 查：R（Retrieve）
*/

//获取所有商品数据
Router.get('/', async (req, res) => {
    // console.log('查询所有')
    let result = await mongo.find('goods');
    res.send(result);
});
Router.route('/:id')
    // 获取单个商品数据
    .get(async (req, res) => {
        let {
            id
        } = req.params;
        // console.log(id);
        let result = await mongo.find('goods', {
            goods_id: id
        });
        res.send(result);
    })
    // 删除商品
    .delete(async (req, res) => {
        let {
            id
        } = req.params;
        // console.log(id);
        let result = await mongo.remove('goods', {
            goods_id: id
        });
        res.send(result);
    })

// 修改商品数据
Router.post('/change', async (req, res) => {
    // console.log(req.body);
    let {
        goods_id,
        goods_name,
        goods_promotion_price,
        goods_image,
        store_id,
        store_name,
        sell_out
    } = req.body;
    let result = await mongo.update('goods', {
        goods_id
    }, {
        $set: {
            goods_name,
            goods_promotion_price,
            goods_image,
            store_id,
            store_name,
            sell_out
        }
    });
    res.send(result);
});

// 添加商品数据
Router.post('/add', async (req, res) => {
    // console.log(req.body);
    let {
        goods_id,
        goods_name,
        goods_promotion_price,
        goods_image,
        store_id,
        store_name,
        sell_out
    } = req.body;
    let result = await mongo.create('goods', [{
        goods_id,
        goods_name,
        goods_promotion_price,
        goods_image,
        store_id,
        store_name,
        sell_out
    }]);
    res.send(result);
})
module.exports = Router;