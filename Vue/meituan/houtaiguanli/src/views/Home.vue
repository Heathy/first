<template>
  <div id="app">
    <!-- header -->
    <div>
      <el-header>
        <div style="float: left;height: 60px;">
          <img src="../assets/logo.png" style="height:60px;width:60px;" alt />
        </div>
        <div style="float: left;height: 60px;color:#909399">欢迎来到本地有后台管理系统</div>
        <div style="float: right;color:#fff; font-size: 12px;margin-right:50px;">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px;color:#fff;"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <div @click="jumpTo()">
                  <span style="color: #555;font-size: 14px;">个人信息</span>
                </div>
              </el-dropdown-item>
              <el-dropdown-item>
                <div @click="jumpTo('/user/changepwd')">
                  <span style="color: #555;font-size: 14px;">修改密码</span>
                </div>
              </el-dropdown-item>
              <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span @click="aaa()">{{userName}}</span>
        </div>
        <div class="clear"></div>
      </el-header>
    </div>
    <!-- body -->
    <el-container>
      <aside style="background-color: #16181D;">
        <div style="text-align:center">
          <img src="../assets/logo.png" style="width:30px;height:30px;" alt @click="closeNav()" />
        </div>
        <el-menu
          style="background-color: #16181D;"
          class="el-menu-vertical-demo"
          router
          :unique-opened="true"
          @select="handleSelect"
          :collapse="iscloseNav"
        >
          <template v-for="(item,index) in menuList">
            <el-submenu :index="index+''" :key="index">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span slot="title" style="color:#b3c0d1">{{item.name}}</span>
              </template>
              <el-menu-item v-for="(ll,ii) in item.snippet" :key="ii" :index="ll.url">{{ll.title}}</el-menu-item>
            </el-submenu>
          </template>
        </el-menu>
      </aside>
      <!-- 右侧路由信息 -->
      <el-container>
        <el-main v-if="collapsed">
          <router-view></router-view>
        </el-main>
        <el-main v-else>
          <h1 class="main-home">本地有后台管理系统</h1>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      defaultActiveIndex: ["0"],
      menuList: [
        {
          name: "权限管理",
          snippet: [
            {
              title: "管理员管理",
              url: "/manageList"
            }
          ]
        },
        {
          name: "用户管理",
          snippet: [
            {
              title: "用户列表",
              url: "/userList"
            }
          ]
        },
        {
          name: "商品管理 ",
          snippet: [
            {
              title: "商品列表",
              url: "/goodList"
            }
          ]
        },
        {
          name: "订单管理",
          snippet: [
            {
              title: "订单列表",
              url: "/orderList"
            }
          ]
        }
      ],
      userName: "",
      collapsed: false,
      iscloseNav: false
    };
  },
  methods: {
    // 	index: 选中菜单项的 index, indexPath: 选中菜单项的 index path
    handleSelect() {
      this.collapsed = true;
      // this.defaultActiveIndex = [index];
      // console.log("111" + this.$route.path);
    },
    // 个人中心  修改密码
    jumpTo(url) {
      this.defaultActiveIndex = url;
      this.$router.push(url);
    },
    // 退出
    logout() {
      let that = this;
      this.$confirm("确认退出吗?", "提示", {
        confirmButtonClass: "el-button--warning"
      })
        .then(() => {
          //确认
          that.loading = true;
          this.$router.push("/login");
        })
        .catch(() => {});
    },
    closeNav() {
      this.iscloseNav = !this.iscloseNav;
    }
  }
};
</script>


<style>
.main-home {
  font-size: 50px;
  color: #16181d;
}
.el-header {
  background-color: #23262e;
  color: #333;
  line-height: 60px;
}

.el-menu--popup {
  background-color: #16181d;
}
</style>