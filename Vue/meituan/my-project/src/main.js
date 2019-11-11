import Vue from 'vue'
import App from './App.vue'
import store from './stores'
import router from './routers'
import Vuex from 'vuex'
Vue.use(Vuex)
import axios from 'axios'
Vue.prototype.$axios = axios
Vue.config.productionTip = false;
import {
  Field,
  NavBar,
  Row, Col,
  Checkbox, CheckboxGroup,
  Button,
  Divider,
  Cell, CellGroup,
  Icon,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Swipe, SwipeItem,
  Rate,
  SubmitBar,
  Card
} from 'vant';
Vue.use(Field)
  .use(NavBar)
  .use(Row)
  .use(Col)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(Button)
  .use(Divider)
  .use(Cell)
  .use(CellGroup)
  .use(Icon)
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton)
  .use(Swipe)
  .use(SwipeItem)
  .use(Rate)
  .use(SubmitBar)
  .use(Card);



new Vue({
  // vue-router this.$router
  router,
  // vuex this.$store
  store,
  render: h => h(App),
}).$mount('#app')