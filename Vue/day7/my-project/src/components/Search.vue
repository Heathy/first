<template>
  <van-search label="地址" v-model="value" placeholder="请输入搜索关键词" show-action shape="round" @search="onSearch">
    <div slot="action" @click="onSearch">搜索</div>
  </van-search>
</template>
<script>
import Vue from "vue";
import { Search } from "vant";
Vue.use(Search);
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    // 搜索
    onSearch() {
      this.$store.dispatch('setAuthor',{
        value:this.value
      })
      window.console.log(this.value)
    }
  }
};
</script>