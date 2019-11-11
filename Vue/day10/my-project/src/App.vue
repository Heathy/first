<template>
  <div id="app">
    <header class="navbar">
      <div class="nav-wrap-left">
        <a class="react back" href="javascript:history.back()">
          <img
            src="https://p1.meituan.net/travelcube/53361fd0bb6b333e779377789a8d669e531.png"
            class="icn_back"
          />
        </a>
      </div>
      <span class="nav-header h1">美团网</span>
      <div class="nav-wrap-right">
        <a class="react nav-dropdown-btn" data-com="dropdown" data-target="nav-dropdown">
          <span class="nav-btn">
            <img
              src="https://p0.meituan.net/travelcube/7289ad16274ae18417b84c916bb6a711169.png"
              class="icn_menu"
            />
          </span>
        </a>
      </div>
      <div id="nav-dropdown" class="nav-dropdown">
        <ul>
          <li>
            <a class="react" gaevent="imt/hd/index" href="//i.meituan.com/">
              <img
                src="https://p1.meituan.net/travelcube/142ba119b889881105236ef57446e6bf866.png"
                class="icn_drop_home"
              />
              <space></space>首页
            </a>
          </li>
          <li>
            <a
              class="react"
              gaevent="imt/hd/account"
              rel="nofollow"
              href="//i.meituan.com/account/"
            >
              <img
                src="https://p0.meituan.net/travelcube/641521461179df7cfb88738dd1ea11ec1031.png"
                class="icn_drop_mine"
              />
              <space></space>我的
            </a>
          </li>
          <li>
            <a class="react headSearch" gaevent="imt/hd/search" href="//i.meituan.com/s/">
              <img
                src="https://p0.meituan.net/travelcube/4b45dc09c35f9175498345f8672d08991022.png"
                class="icn_drop_search"
              />
              <space></space>搜索
            </a>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    gturl() {
      localStorage.url = this.$route.name;
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
  -ms-flex: 1;
  line-height: 0.64rem;
  -webkit-box-sizing: border-box;
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
.navbar .nav-wrap-left {
  width: 1.9rem;
}
.navbar .nav-wrap-right {
  width: 1.7rem;
  text-align: right;
  padding-right: 0.2rem;
}
.navbar .nav-wrap-right a {
  width: auto;
  padding: 0 0 0 0.2rem;
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
  -webkit-transition: height 0.1s;
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

