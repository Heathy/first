/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-18 20:31:54
 * @LastEditTime: 2019-10-18 20:31:54
 * @LastEditors: your name
 */
import axios from 'axios';

export default {
    state: {
        user: null
    },
    mutations: {
        login(state, {
            username,
            Authorization,
        }) {
            state.user = {
                username,
                Authorization,
            }

            // 存入本地存储
            localStorage.setItem("user", JSON.stringify({
                username,
                Authorization,
            }));
        },
        logout(state) {
            state.user = null;

            // 清空本地存储
            localStorage.removeItem("user");
        }
    },
    actions: {
        async checkLogin(context) {
            let user = localStorage.getItem("user");
            if (!user) {
                context.commit('logout');
            } else {
                user = JSON.parse(user);
                // 发起ajax请求，校验token是否过期
                let {
                    data
                } = await axios.get('http://120.78.213.100:1907/verify', {
                    headers: {
                        Authorization: user.Authorization
                    }
                })
                // 放置刷新vuex数据丢失的问题
                if (data.code === 1) {
                    context.commit('login', user);
                } else {
                    context.commit('logout');
                    return 400
                }
            }
            return 200;
        }
    }
}