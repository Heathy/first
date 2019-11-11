<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      test: "kkkk",
      ative: "home",
      info: "0",
      path: ""
    };
  },
  components: {},
  // 计算属性(仓库store)
  computed: {
    // cartlength() {
    //   return
    //   this.$store.getters.cartlength;
    // }
  },
  // 将路径存在本地存储
  methods: {
    gturl() {
      localStorage.url = this.$route.name;
    }
  },
  created() {},
  // 监听路由路径
  watch: {
    $route: function() {
      this.path = this.$route.name;
    }
  }
};
</script>

<style>
</style>
