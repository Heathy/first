<template name="component-name">
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="crumb">
      <el-breadcrumb-item :to="{ path: '/' }">后台</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/orderList' }">订单列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!--检索条-->
    <el-col class="toolbar" style="padding-top: 15px;">
      <el-form :inline="true" :model="filters">
        <el-form-item label="关键字">
          <el-input v-model="filters.keyword" placeholder="关键字"></el-input>
        </el-form-item>
        <el-form-item label="创建时间">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="开始日期"
              v-model="filters.StTime"
              value-format="yyyy-MM-dd"
              style="width: 100%;"
            ></el-date-picker>
          </el-col>
          <el-col class="line" :span="1">~</el-col>
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="结束时间"
              v-model="filters.EndTime"
              value-format="yyyy-MM-dd"
              style="width: 100%;"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="发货状态">
          <el-select v-model="filters.Type" placeholder="发货状态">
            <el-option
              v-for="item in typeList"
              :key="item.value"
              :label="item.name"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getUsers()">查询</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column label="创建时间" prop="date"></el-table-column>
      <el-table-column label="商品 ID" prop="goods_id"></el-table-column>
      <el-table-column label="用户名" prop="username"></el-table-column>
      <el-table-column label="支付状态" prop="payStatus"></el-table-column>
      <el-table-column label="发货状态" prop="deliveryStatus"></el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入用户名或ID搜索" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 搜索关键字
      filters: {
        keyword: "",
        StTime: "2019-10-16",
        EndTime: "",
        Type: 0
      },
      search: "",
      // 状态数组
      typeList: [
        {
          name: "全部",
          value: 0
        },
        {
          name: "待发货",
          value: 1
        },
        {
          name: "待收货",
          value: 2
        }
      ],
      tableData: [
        {
          date: "2019-10-16", //创建时间
          username: "ymmm196", // 用户
          goods_id: "111111",
          payStatus: "已支付",
          deliveryStatus: "未发货",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  methods: {
    // 查询
    getUsers() {
      console.log(111);
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>
<style lang="">
</style>