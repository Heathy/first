<template>
  <div>
    <main style="margin:0">
      <header class="header">
        <div style=" float: right;">
          <van-icon
            color="#fff"
            name="setting-o"
            size="1.5em"
            style=" width: 1.95rem;
    height: 1.95rem;line-height: 1.95rem;margin-right:0.5rem"
          />
          <van-icon
            color="#fff"
            name="chat-o"
            size="1.5em"
            style=" width: 1.95rem ;
        height: 1.95rem; color:#fff; line-height: 1.95rem;"
            @click="goto('/login')"
          />
        </div>
      </header>
      <div class="H_box">
        <div class="member-info">
          <a class="default-avatar"></a>
          <a @click="goto('/login')" class="to-login" v-if="showUser">Hi,请点击登录</a>
          <a v-else class="to-login">{{username}}</a>
        </div>
        <div class="member-collect">
          <van-grid clickable :column-num="5" :border="false" icon-size="20px">
            <van-grid-item
              icon="home-o"
              text="返回首页"
              to="/"
              style="  background: rgba(0, 0, 0, 0.1);"
            />
            <van-grid-item
              icon="like-o"
              text="商品收藏"
              to="/"
              style="  background: rgba(0, 0, 0, 0.1);"
            />
            <van-grid-item
              icon="shop-collect-o"
              text="店铺收藏"
              to="/"
              style="  background: rgba(0, 0, 0, 0.1);"
            />
            <van-grid-item
              icon="search"
              text="我的足迹"
              url="/"
              style="  background: rgba(0, 0, 0, 0.1);"
            />
            <van-grid-item
              icon="shopping-cart-o"
              text="购物车"
              to="/cart"
              style="  background: rgba(0, 0, 0, 0.1);"
            />
          </van-grid>
        </div>
      </div>
      <div class="M_Box1">
        <van-nav-bar>
          <div slot="left">
            <van-icon name="orders-o" size="20" />
            <h3 style=" display: inline-block;margin-left:5px ;">我的订单</h3>
          </div>
        </van-nav-bar>
        <div class="m_box1">
          <van-grid clickable :column-num="5" :border="false" icon-size="20px">
            <van-grid-item
              icon="home-o"
              text="全部订单"
              to="/"
              style="  background: rgba(0, 0, 0, 0.1);"
            />
            <van-grid-item
              icon="paid"
              text="代付款"
              url="/vant/mobile.html"
              style="  background: rgba(0, 0, 0, 0.1);"
            />
            <van-grid-item
              icon="pending-payment"
              text="待收货"
              url="/vant/mobile.html"
              style="  background: rgba(0, 0, 0, 0.1);"
            />
            <van-grid-item
              icon="records"
              text="待评价"
              url="/vant/mobile.html"
              style="  background: rgba(0, 0, 0, 0.1);"
            />
            <van-grid-item
              icon="after-sale"
              text="退款/退货"
              url="/vant/mobile.html"
              style="  background: rgba(0, 0, 0, 0.1);"
            />
          </van-grid>
        </div>
        <van-divider style="margin:0" />
        <van-nav-bar style="margin:10px 0">
          <div slot="left">
            <van-icon name="card" size="20" color="#58bc58" />
            <h3 style=" display: inline-block;margin-left:5px ;">我的财产</h3>
          </div>
          <div slot="right">
            <span
              style="font-size: 0.6rem;
                        color: #999;  line-height: 1rem;"
            >查看全部财产</span>

            <van-icon name="arrow" color="#999" />
          </div>
        </van-nav-bar>
        <van-nav-bar>
          <div slot="left">
            <van-icon name="friends" size="20" color="#F58F58" />
            <h3 style=" display: inline-block;margin-left:5px ;">好友推荐</h3>
          </div>
          <div slot="right">
            <van-icon name="arrow" color="#999" />
          </div>
        </van-nav-bar>
        <van-nav-bar>
          <div slot="left">
            <van-icon name="graphic" size="20" />
            <h3 style=" display: inline-block;margin-left:5px ;">每日签到</h3>
          </div>
          <div slot="right">
            <van-icon name="arrow" color="#999" />
          </div>
        </van-nav-bar>
        <van-nav-bar>
          <div slot="left">
            <van-icon name="map-marked" size="20" color="#B69BF8" />
            <h3 style=" display: inline-block;margin-left:5px ;">收货地址管理</h3>
          </div>
          <div slot="right">
            <van-icon name="arrow" color="#999" />
          </div>
        </van-nav-bar>
        <van-nav-bar>
          <div slot="left">
            <van-icon name="setting" size="20" color="#FADCEC" />
            <h3 style=" display: inline-block;margin-left:5px ;">用户设置</h3>
          </div>
          <div slot="right">
            <van-icon name="arrow" color="#999" />
          </div>
        </van-nav-bar>
        <van-nav-bar>
          <div slot="left">
            <van-icon name="column" size="20" color="#E12581" />
            <h3 style=" display: inline-block;margin-left:5px ;">隐私政策</h3>
          </div>
          <div slot="right">
            <van-icon name="arrow" color="#999" />
          </div>
        </van-nav-bar>
      </div>
    </main>
  </div>
</template>
  <script>
export default {
  data() {
    return {
      showUser: true,
      username: ""
    };
  },
  methods: {
    goto(path) {
      this.$router.push(path);
    },
    gourl() {
      let url = localStorage.url;
      this.$$router.push(url);
    }
  },
  created() {
    this.showUser = false;
    this.username = JSON.parse(localStorage.getItem("user")).username;
  }
};
</script>
  <style lang="scss">
.header {
  height: 2rem;
  position: absolute;
  z-index: 8;
  top: 0;
  left: 0;
  right: 0;
  bottom: auto;
  background-color: transparent;
  line-height: 2rem;
}
main {
  .H_box {
    background: url("../assets/images/ia_100000002.png");
    height: 10rem !important;
    width: 100%;
    position: relative;
    text-align: center;
    background-color: #ed5564;
    animation: changeBg 20s infinite;
    .member-info {
      width: 12rem;
      height: 6rem;
      margin: -3.5rem 0 0 -6rem;
      position: absolute;
      z-index: 1;
      top: 50%;
      left: 50%;
      animation: memberInfoDown 1000ms ease-in;
      -webkit-animation: memberInfoDown 1000ms ease-in;
      .default-avatar {
        background-color: rgba(0, 0, 0, 0.5);
        display: block;
        background-image: url("../assets/images/ia_100000003.png");
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: 60%;
        width: 4rem;
        height: 4rem;
        margin: 0 auto;
        border-radius: 100%;
      }
      .to-login {
        font-size: 0.8rem;
        color: #fff;
        line-height: 1rem;
        height: 1rem;
        margin: 0.25rem auto;
      }
    }
    @keyframes memberInfoDown {
      0% {
        top: -50%;
      }
      30% {
        top: -10%;
      }

      75% {
        top: 55%;
      }
      85% {
        top: 47%;
      }
      95% {
        top: 52%;
      }
      100% {
        top: 50%;
      }
    }
  }
  @keyframes changeBg {
    0% {
      background-color: #ed5564;
    }

    10% {
      background-color: #fb6e52;
    }
    20% {
      background-color: #ffce55;
    }
    30% {
      background-color: #a0d468;
    }
    40% {
      background-color: #48cfae;
    }
    50% {
      background-color: #4fc0e8;
    }
    60% {
      background-color: #5d9cec;
    }
    70% {
      background-color: #ac92ed;
    }
    80% {
      background-color: #ec87bf;
    }
    90% {
      background-color: #ed5564;
    }
  }
  .member-collect {
    font-size: 0;
    height: 4rem;
    background: rgba(0, 0, 0, 0.1);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    .van-grid-item__content {
      background: transparent;
      color: #fff;
      height: 100%;
      padding: 10px 0;
      .van-grid-item__text {
        color: #fff;
      }
    }
  }
  .M_Box1 {
    width: 100%;
    .m_box1 {
      padding: 10px 0;
    }
  }
}
.van-nav-bar {
  position: relative;
  height: 60px;
  line-height: 4px;
  text-align: center;
  background-color: #fff;
  -webkit-user-select: none;
  user-select: none;
}
</style>