import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import "../postcss.js";
Vue.config.productionTip = false
import "@vant/touch-emulator";

import {Grid} from 'vant';
import axios from 'axios';
Vue.prototype.$axios = axios;
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import base from './assets/css/base.css';
import vuex from 'vuex';
import store from './store';

Vue.use(vuex)
Vue.use(ElementUI)
Vue.use(base)
Vue.use(store)
Vue.use(Grid)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
