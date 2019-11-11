<template>
  <div>
    <div data-v-d7069950 id="header">
      <a data-v-d7069950 href="/shop" class>
        <div data-v-d7069950 class="header_l"></div>
      </a>
      <a data-v-d7069950 href="/login" class>
        <div data-v-d7069950 class="header_r"></div>
      </a>
    </div>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img
          src="../assets/images/4e833333765d28d2753f77fd0d4985a91737386 (1).jpg"
          alt="1"
          width="100%"
          height="200rem"
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="../assets/images/9fb71f24ff7e6bd6d71cbcc824caf019329883 (1).jpg"
          alt="2"
          width="100%"
          height="200rem"
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="../assets/images/cc969979238198246a83da71d3fd8e05339256.jpg"
          alt="3"
          width="100%"
          height="200rem"
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="../assets/images/fbd82ee7f1225aec66732a9837787dc740098.jpg"
          alt="4"
          width="100%"
          height="200rem"
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="../assets/images/d45724965a4a612d5b98755ee3f40b0259909.jpg"
          alt="5"
          width="100%"
          height="200rem"
        />
      </van-swipe-item>
    </van-swipe>
    <div class="satisfaction">
      <div class="goods_eval">对商品的评价</div>
      <van-rate v-model="value" allow-half void-icon="star" void-color="#eee" />
    </div>

    <van-card
      :num="goodsdata.num"
      :price="goodsdata.price"
      :desc="goodsdata.desc"
      :title="goodsdata.title"
      :thumb="goodsdata.thumb"
    >
      <div slot="tags">
        <van-tag plain type="danger">{{goodsdata.tags1}}</van-tag>
        <van-tag plain type="danger">{{goodsdata.tags2}}</van-tag>
      </div>
      <div slot="footer">
        <van-button size="mini">{{goodsdata.btn1}}</van-button>
        <van-button size="mini">{{goodsdata.btn2}}</van-button>
      </div>
    </van-card>

    <div class="cartfoot">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="cart-o" text="购物车" info="5" />
        <van-goods-action-icon icon="shop-o" text="店铺" info="12" />
        <van-goods-action-button type="warning" text="加入购物车" @click="go(gid)" />
        <van-goods-action-button type="danger" text="立即购买" @click="show()" />
      </van-goods-action>
    </div>

    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" v-if="show">
      <van-checkbox v-model="checked">全选</van-checkbox>
      <span slot="tip">
        你的收货地址不支持同城送,
        <span>修改地址</span>
      </span>
    </van-submit-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 2.5, // 评分指数
      active: 0,
      value1: 0,
      value2: "a",
      value3: 0,
      goodsdata: {},
      // show: false
      // 商品价格的排序
      // option1: [
      //   { text: "全部商品", value: 0 },
      //   { text: "新款商品", value: 1 },
      //   { text: "活动商品", value: 2 }
      // ],
      // option2: [{ text: "筛选", value: "a" }],
      // option3: [{ text: "销量优先", value: 0 }]
    };
  },

  // 点击购买的时候出现
  // computed: {
  //   show
  // },
  async created() {
    let data = await this.$axios.get("http://localhost:3000/gid", {
      params: {
        gid: this.$route.query.gid
      }
    });
    let goodsdata = data.data[0];
    window.console.log(22, goodsdata);
    this.goodsdata = goodsdata;
    // window.console.log("gid为" + { gid });
    // window.console.log(this);
    // window.console.log(this.$route.query.gid);
  },
  methods: {
    go(gid) {
      localStorage.path = "main/order";
      this.$router.push({ path: "main/order", query: { gid } });
    },
    goto(path) {
      this.$router.push(path);
    },
    // onClickleft() {},
    async addcart(id) {
      // let currentGoods = this.$store.state.cart.cartList.array.forEach(element => {
      //   if (id === element.goods_id) return 1;
      // });
      let currentGoods = this.$store.state.cart.cartList.filter(
        item => item.goods_id === id
      )[0];

      if (currentGoods) {
        let qty = currentGoods.qty++;
        this.$store.comit("changeQty", { id, qty });
      } else {
        let datas = await this.$axios.get("http://localhost:3000/goods/" + id);
        this.goods = datas.data[0];

        let good = {
          goods_id: id,
          good_image: this.goods.goods_image,
          goods_name: this.goods.goods_name,
          goods_promotion_price: this.goods.goods_promotion_price,
          qty: this.goods.sell_out,
          shopid: this.goods.store_id,
          shopname: this.goods.store_name
        };
        this.$store.commit("adcart", good);
      }
    }
  }
};
</script>

<style lang="css">
.header_l[data-v-d7069950] {
  width: 1.95rem;
  height: 1.95rem;
  position: absolute;
  top: 0;
  left: 0.266667rem;
  background: #eee;
  border-radius: 50%;
  /* background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAABGdBT…mnb/wtmCLL9shoy5LlCjNHZvhBOTsqkYUnfsqkox8G8gskmxH1cSPhmgAAAABJRU5ErkJggg==);
  background-repeat: no-repeat; */
  background-position: 50% 50%;
  background-size: 60%;
  opacity: 1;
}
.header_r[data-v-d7069950] {
  width: 1.95rem;
  height: 1.95rem;
  position: absolute;
  top: 0;
  right: 0.266667rem;
  background: #eee;
  border-radius: 50%;
  /* background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8BAMAAADI0sRBAAAAMFBMV…bOjmRz+9lGdXPk5B7WkkxcZ2QXQFDO4YTnXgqneMXwPA9vsXp1V658flsAAAAASUVORK5CYII=);
  background-repeat: no-repeat; */
  background-position: 50% 50%;
  background-size: 60%;
  opacity: 1;
}
</style>