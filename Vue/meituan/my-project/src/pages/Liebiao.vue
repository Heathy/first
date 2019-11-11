<template>
  <div id="app">
    <div
      class="van-nav-bar van-hairline--bottom"
      style="color: rgb(0, 0, 0); position: fixed; top: 0px; left: 0px; width: 100%; border-bottom: 0.05rem solid rgb(238, 238, 238); z-index: 1;"
    >
      <div class="van-nav-bar__left" @click="goto('main/recover')">
        <i class="van-icon van-icon-arrow-left" style="color: rgb(0, 0, 0); font-size: 25px;">
          <!---->
        </i>
      </div>
      <div class="van-nav-bar__title van-ellipsis">
        <div
          class="van-search"
          style="color: rgb(0, 0, 0); margin-top: 5px; padding: 0px; background: rgb(255, 255, 255);"
        >
          <div class="van-search__content van-search__content--square">
            <div class="van-cell van-cell--borderless van-field">
              <div class="van-field__left-icon">
                <i class="van-icon van-icon-search">
                  <!---->
                </i>
              </div>
              <div class="van-cell__value van-cell__value--alone">
                <div class="van-field__body">
                  <input
                    type="search"
                    slot="title"
                    placeholder="搜索附近的美食"
                    class="van-field__control"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="van-nav-bar__right">
        <i class="van-icon van-icon-chat-o" style="color: rgb(243, 271, 57); font-size: 25px;">
          <!---->
        </i>
      </div>
    </div>
    <div id="goodlist" style="margin-top: 52px" v-for="(item,index) in goodsdata" :key="index">
      <van-card @click="go(item.gid)"
        :num=item.num
        :price=item.price
        :desc=item.desc
        :title=item.title
        :thumb=item.thumb
      >
        <div slot="tags">
          <van-tag plain type="danger">{{item.tags1}}</van-tag>
          <van-tag plain type="danger">{{item.tags2}}</van-tag>
        </div>
        <div slot="footer">
          <van-button size="mini">{{item.btn1}}</van-button>
          <van-button size="mini">{{item.btn2}}</van-button>
        </div>
      </van-card>
    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item to="/main/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/main/recover" icon="search">发现</van-tabbar-item>
      <van-tabbar-item to="/main/order" icon="friends-o">订单</van-tabbar-item>
      <van-tabbar-item to="/main/mine" icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>



<script>
export default {
  data() {
    return {
      goodsdata: [],
      active: 0
    };
  },
  // mounted() {
  //   this.loaderData();
  // },
  async created() {
    let datas = await this.$axios.get("http://localhost:3000/meituan");
    // console.log("data:",datas);
    this.goodsdata = datas.data;
  },

  methods: {
    // 请求后端mongodb里面表名为meituan的数据
    // 跳转路径
    goto(path) {
      this.$router.push(path);
    },
    // 带参
    go(gid) {
      localStorage.path = "detail";
      window.console.log(gid);
      this.$router.push({ path: "/detail", query: { gid } });
    }
  }
};
</script>

<style lang="css">
.van-nav-bar__title {
  max-width: 60%;
  margin: 6px auto;
  color: #323233;
  font-weight: 500;
  font-size: 16px;
}
</style>