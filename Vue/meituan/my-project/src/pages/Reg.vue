<template>
  <div>
    <header style=" border-bottom: solid 0.05rem #EEE;   background: #F5F5F5;">
      <van-nav-bar style="color:#000" title="注册">
        <van-icon
          @click="goto('main/home')"
          name="wap-home-o"
          slot="left"
          size="25px"
          color="#000"
        />
        <span style="color:#EE6774" slot="right" @click="goto('/login')">登陆</span>
      </van-nav-bar>
    </header>

    <van-cell-group>
      <van-field
        v-model="ruleForm.username"
        label="账号"
        placeholder="请输入用户名"
        @blur="checkUsername(ruleForm.username)"
      />
      <van-field v-model="ruleForm.password" type="password" label="密码" placeholder="请输入密码" />
      <van-field
        v-model="ruleForm.checkPass"
        clearable
        type="password"
        label="确认密码"
        placeholder="请再次确认密码"
      />
    </van-cell-group>

    <div class="L_box2">
      <van-button type="primary" size="large" @click="submitForm('ruleForm')">注册</van-button>
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
// import qs from 'Qs'
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
        checkPass: ""
      },
      show: false,
      content: "",
      active: 0
    };
  },
  methods: {
    // 先确认用户名是否在user表中存在
    async checkUsername(username) {
      await this.$axios
        .get("http://localhost:3000/regs", {
          params: {
            user: username
          }
        })
        .then(({ data }) => {
          if (data == 0) {
            this.show = true;
            this.content = "可以注册";
          } else {
            this.show = true;
            this.content = "该账户已被注册";
          }
          setTimeout(() => {
            this.show = false;
          }, 1000);
        });
    },

    goto(path) {
      this.$router.push(path);
    },

    // 点击注册
    submitForm() {
      // console.log(this.ruleForm);
      let username = this.ruleForm.username;
      let password = this.ruleForm.password;
      let checkPass = this.ruleForm.checkPass;
      window.console.log(username, password, checkPass);
      if (username && password && checkPass) {
        this.$axios
          .get("http://localhost:3000/regss", {
            params: { user: username, pass: password }
          })
          .then(({data}) => {
            // window.console.log("1");
            // window.console.log(data);
            if (data == 0) {
              alert("注册成功");
              window.console.log(this);
              this.$router.replace("/login");
            } else {
              alert("注册失败");
            }
          });
      } else {
        this.show = true;
        this.content = "请重新输入！";
      }
    }
  }
};
</script>


<style lang="scss" scoped>
.L_box2 {
  margin: 5%;
  padding-top: 5%;

  .van-button--large {
    height: 1.8rem;
    line-height: 1.8rem;
  }
}
.van-nav-bar__title {
  margin-left: 70px;
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
</style>
