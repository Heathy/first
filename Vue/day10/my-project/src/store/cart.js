/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-17 10:46:19
 * @LastEditTime: 2019-10-19 16:28:35
 * @LastEditors: Please set LastEditors
 */
// import axios from 'axios';
let cart = ({
    state: {
        cartList: [{
            // goods_id: "108230",
            // goods_name: "洽洽喀吱脆 恰恰喀吱脆麻辣味45g",
            // goods_promotion_price: "3.50",
            // goods_image: "https://img.bdyoo.com/shop/store/goods/88/2019/07/88_06156397009441309.jpg-wh360",
            // shopid: "88",
            // shopname: "林红便利店",
            // qty: "0"

        }]
    },
    getters: {
        cartlength(state) {
            return state.cartList.length;
        },
        totalPrice(state) {
            return state.cartList.reduce((prev, item) => prev + item.goods_promotion_price * item.qty * 100, 0)
        },
    },
    mutations: {
        // state: store中的state
        // payload：调用mutaion时传入的参数
        adcart(state, goods) {
            state.cartList.unshift(goods);
        },
        removeFromCart(state, id) {
            state.cartList = state.cartList.filter(item => item.goods_id != id);
        },
        clearCart(state) {
            state.cartList = [];
        },
        changeQty(state, {
            id,
            qty
        }) {

            state.cartList.forEach(item => {
                if (item.id === id) {
                    item.qty = qty;
                }
            })
        }
    }


})
export default cart;