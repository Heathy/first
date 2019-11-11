<template>
  <div>
    <header style=" border-bottom: solid 0.05rem #EEE;   background: #F5F5F5;">
      <van-nav-bar style="color:#000" title="登陆">
        <van-icon
          @click="goto('/main/home')"
          name="wap-home-o"
          slot="left"
          size="25px"
          color="#000"
        />
        <span style="color:#EE6774" slot="right" @click="goto('/reg')">注册</span>
      </van-nav-bar>
    </header>
    <van-cell-group>
      <van-field
        v-model="username"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="$toast('question')"
      />

      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
    </van-cell-group>
    <div class="L_box1">
      <van-row type="flex" justify="space-around">
        <van-col span="9">
          <van-checkbox v-model="checked1" checked-color="#08a8bd">记住用户吗</van-checkbox>
        </van-col>
        <van-col span="9">
          <van-checkbox v-model="checked2" checked-color="#07c160">30天自动登陆</van-checkbox>
        </van-col>
        <van-col span="6">
          <a href="###">忘记密码</a>
        </van-col>
      </van-row>
    </div>
    <div class="L_box2">
      <van-button type="primary" size="large" @click="btn">登陆</van-button>
    </div>
    <div class="error-tips" v-if="show">
      <p>{{content}}</p>
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
// 获取cookie
export function getcookie(key) {
  let str = document.cookie; //username=admin; age=18
  let arr = str.split(";");
  for (let item of arr) {
    let arr2 = item.split("=");
    if (key == arr2[0]) {
      return arr2[1];
    }
  }
}
// 设置cookie
export function setcookie(key, val, iday) {
  let now = new Date();
  now.setDate(now.getDate() + iday);
  document.cookie = key + "=" + val + ";expires" + now + ";path=/";
}

// 删除cookie
export function removecookie(key) {
  setcookie(key, "", -1);
}

export default {
  data() {
    return {
      username: "",// 用户名
      password: "",// 密码
      checked1: true,// 记住密码 bool
      checked2: true,// 30天免登入 bool
      show: false,
      content: "",
      active: 0
    };
  },
  // watch: {
  //   show: function() {
  //     let timer = setTimeout(function() {
  //       this.show = false;
  //       window.console.log(this.show);
  //       clearTimeout(timer);
  //     }, 3000);
  //   }
  // },
  methods: {
    // onClickLeft() {
    //   Toast("返回");
    // },
    // onClickRight() {
    //   Toast("注册");
    // },
    goto(path) {
      this.$router.push(path);
    },
    async btn() {
      let username = this.username;
      let password = this.password;
      let checked2 = this.checked2;
      // let content = this.content;

      if (this.username === "" || this.password === "") {
        this.show = true;
        this.content = "用户名必须填 请输入密码";
      } else {
        let { data } = await this.$axios
          .get(
            "http://localhost:3000/user",
            {
              params: { username, password, checked2 }
            },
            
          )
          .then(({ data }) => {
            if (data == 1) {
              let { targetUrl } = this.$route.query;
              this.$store.commit("login", {
                username,
                // Authorization: data.data
              });
              setcookie(username, password);
              localStorage.setItem("status", "1");
              // this.$router.replace({path:'/mine',params:{username}})
              this.$router.replace({
                path: targetUrl || "./main/mine"
              });
            } else {
              this.show = true;
              this.content = "请检查用户名和密码是否正确";
            }
          });
        window.console.log(data);
      }
    }
  }
};
</script>
<style lang="scss">
.L_box1 {
  padding: 1rem 2rem 0 2rem;
  line-height: 0.9rem;
  font-size: 0.6rem;
  color: #666;
}
.L_box2 {
  margin: 5%;
  padding-top: 5%;

  .van-button--large {
    height: 1.8rem;
    line-height: 1.8rem;
  }
}
.L_box3 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1310;
  height: 50px;
  background: #f5f5f5;
}
.error-tips {
  /* display: none; */
  background-color: rgba(255, 255, 255, 0.95);
  border: solid 0.05rem #ccc;
  padding: 0.6rem 0.6rem;
  text-align: center;
  border-radius: 0.6rem;
  position: fixed;
  z-index: 9999;
  top: 50%;
  left: 25%;
  right: 25%;
  color: #333;
  font-size: 0.7rem;
  line-height: 1rem;
  box-shadow: 0 0 1rem #bbb;
  p {
    color: rgba(241, 104, 13, 0.61);
    font-size: 13px;
  }
}
.van-nav-bar {
  position: relative;
  height: 48px;
  line-height: 41px;
  text-align: center;
  background-color: #fff;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>