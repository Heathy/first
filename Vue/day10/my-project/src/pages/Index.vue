<template>
  <div>
    <header class="navbar">
      <div class="nav-wrap-left">
        <a gaevent="imt/hd/cityBottom" href="//i.meituan.com/index/changecity" class="react">
          <span class="nav-city">
            广州
            <space></space>
            <img
              src="https://p0.meituan.net/travelcube/45c79a92755b54adc9dc1c4682b123b3201.png"
              class="icn_down"
            />
          </span>
        </a>
      </div>

      <div class="box-searchJ-box-search">
        <a gaevent="imt/homepage/search" class="react" href="//i.meituan.com/s/guangzhou">
          <img
            src="https://p0.meituan.net/travelcube/99c29829cf1b85d5cdbc76a1bd0b7329814.png"
            class="icn_search"
          />
          <span class="single-line">请输入商家名、品类或者商圈...</span>
        </a>
      </div>
      <div class="nav-wrap-right">
        <a class="react" gaevent="imt/homepage/mine" rel="nofollow" href="//i.meituan.com/account/">
          <span class="nav-btn">
            <img
              src="https://p0.meituan.net/travelcube/641521461179df7cfb88738dd1ea11ec1031.png"
              class="icn_mine"
            />
          </span>
        </a>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      list: [],
      loading: false,
      finished: false,
      goodsdata: [],
      goods: {}
    };
  },
  async created() {
    let datas = await this.$axios.get("http://localhost:8080//goods");
    this.goodsdata = datas.data;
  },
  // methods: {
  //   onload() {},
  //   goto(path) {},
  //   // 跳转详情页
  //   indexToAPP(index) {
  //     this.$router.push({
  //       name: "detail",
  //       params: { id: index }
  //     });
  //     window.console.log(this._id);
  //   }
  // }
  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    },
    goto(path) {
      this.$router.push(path);
    },
    async addcart(id) {
      window.console.log(id);
      // let currentGoods = this.$store.state.cart.cartList.forEach(element => {
      //   if (id === element.goods_id) return 1;
      // });
      let currentGoods = this.$store.state.cart.cartList.filter(
        item => item.goods_id === id
      )[0];
      if (currentGoods) {
        let qty = currentGoods.qty++;
        this.$store.commit("changeQty", { id, qty });
        window.console.log(qty);
      } else {
        let datas = await this.$axios.get(
          "http://120.78.213.100:2999/goods/" + id
        );
        this.goods = datas.data[0];
        window.console.log(this.goods);
        let good = {
          goods_id: id,
          goods_image: this.goods.goods_image,
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
<style>
.navbar {
  height: 1.01rem;
  display: -webkit-box;
  display: -ms-flexbox;
  position: relative;
  background-image: linear-gradient(135deg, #ffd000 0%, #ffbd00 100%);
  border: none;
}
.navbar .nav-city {
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  font-family: PingFangSC-Medium;
  font-size: 0.28rem;
  color: #222222;
  margin: 0.31rem 0 0.31rem 0.37rem;
}
.navbar .box-search {
  -webkit-box-flex: 1;
  line-height: 0.64rem;
  position: relative;
  margin-top: 0.2rem;
  opacity: 0.9;
  background: #ffffff;
  border-radius: 0.18rem;
  width: 4.85rem;
  height: 0.64rem;
  color: #999999;
}
.navbar .box-search span {
  font-size: 0.26rem;
  box-sizing: border-box;
  width: 100%;
  color: #999999;
  padding-left: 0rem;
  display: contents;
}
.nav-city img.icn_down {
  width: 0.16rem;
  height: 0.09rem;
  padding-right: 0.315rem;
  margin-left: -0.1rem;
  margin-top: -0.07rem;
}
.nav-wrap-right img.icn_mine {
  width: 0.48rem;
  height: 0.48rem;
}
a.react img.icn_search {
  width: 0.28rem;
  height: 0.28rem;
  padding: 0.15rem 0.13rem 0.16rem 0.27rem;
}
a.react .nav-btn img.icn_home {
  width: 0.48rem;
  height: 0.48rem;
}
a.back img.icn_back {
  width: 0.2rem;
  height: 0.36rem;
}
.navbar .h1.nav-header {
  font-family: PingFangSC-Regular;
  font-size: 0.32rem;
  color: #222222;
}
.nav-btn img.icn_search_2 {
  width: 0.48rem;
  height: 0.48rem;
  padding-right: 0.2rem;
}
.nav-btn img.icn_edit {
  width: 0.48rem;
  height: 0.48rem;
}
.nav-btn img.icn_menu {
  width: 0.48rem;
  height: 0.48rem;
}
img.icn_drop_home,
img.icn_drop_mine,
img.icn_drop_search {
  width: 0.48rem;
  height: 0.48rem;
}
.navbar .nav-dropdown {
  position: absolute;
  right: 0.04rem;
  top: 1rem;
  width: 2rem;
  opacity: 1;
  background: #ffffff;
  color: #222222;
  box-shadow: 0 0.12rem 0.6rem 0 rgba(196, 196, 196, 0.6);
  border-radius: 0.1rem;
  overflow: visible;
  z-index: 100;
  display: none;
}
.nav-dropdown li {
  height: 0.83rem;
  line-height: 0.83rem;
  border-bottom: none;
  text-align: center;
}
.nav-dropdown.active {
  display: block !important;
  height: 2.5rem;
  width: 2rem;
}
.navbar .nav-dropdown:before {
  content: "";
  background-image: url("https://p0.meituan.net/travelcube/dc0f73a6ecc53ad44da9d5bc10ceff96421.png");
  background-size: contain;
  display: block;
  width: 0.38rem;
  height: 0.12rem;
  position: absolute;
  top: -0.12rem;
  right: 0.2rem;
  box-shadow: 0 0 0 0 rgba(196, 196, 196, 0.6);
  border-radius: 0.05rem;
}
.icn_collection,
.icn_nocollection {
  width: 0.48rem;
  height: 0.48rem;
}
</style>