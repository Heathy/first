import Vue from 'vue'
import Router from 'vue-router'


// 路由页面导入
import login from '@/views/Login.vue'
import home from '@/views/Home.vue'
import manageList from '../components/manageList.vue'
import userList from '../components/userList.vue'
import goodList from '../components/goodList.vue'
import orderList from '../components/orderList.vue'
import addGoods from '../components/product/addGoods.vue'
import editGoods from '../components/product/editGoods.vue'

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
};
export default new Router({
    mode: 'history',
    routes: [{
            path: '/login',
            name: '登录',
            component: login
        },
        {
            path: '/',
            name: '首页',
            component: home,
            children: [{
                name: 'manageList',
                path: '/manageList',
                component: manageList
            }, {
                name: 'userList',
                path: '/userList',
                component: userList
            }, {
                name: 'goodList',
                path: '/goodList',
                component: goodList
            }, {
                path: '/goodList/editGoods/:id',
                component: editGoods,
                name: '商品编辑'
            }, {
                path: '/goodList/addGoods',
                component: addGoods,
                name: '商品添加'
            }, {
                name: 'orderList',
                path: '/orderList',
                component: orderList
            }]
        }
    ]
})