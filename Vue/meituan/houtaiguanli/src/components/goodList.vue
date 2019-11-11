<template name="component-name">
  <div>
    <!-- 图标分隔符 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/goodList'}">商品信息管理</el-breadcrumb-item>
    </el-breadcrumb>
    <!--检索条-->
    <el-col class="toolbar" style="padding-top: 15px;">
      <el-form :inline="true" :model="filters">
        <el-form-item>
          <el-input v-model="filters.keyword" placeholder="关键字"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getUsers()">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleAdd()">新增</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <!-- 商品列表 -->
    <el-table
      :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      style="width: 100%"
    >
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="商品名称">
              <span>{{ props.row.goods_name }}</span>
            </el-form-item>
            <el-form-item label="所属店铺">
              <span>{{ props.row.store_name }}</span>
            </el-form-item>
            <el-form-item label="商品 ID">
              <span>{{ props.row.goods_id }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
              <span>{{ props.row.store_id }}</span>
            </el-form-item>
            <el-form-item label="商品价格">
              <span>{{ props.row.goods_promotion_price }}</span>
            </el-form-item>
            <el-form-item label="图片路径">
              <span>{{ props.row.goods_image }}</span>
            </el-form-item>
            <el-form-item label="库存量">
              <span>{{ props.row.sell_out }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="商品 ID" prop="goods_id"></el-table-column>
      <el-table-column label="商品名称" prop="goods_name"></el-table-column>
      <el-table-column label="店铺名称" prop="store_name"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="block" style="margin-top:20px;">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="pagesize"
        layout="total,prev, pager, next, jumper"
        :total="tableData.length"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 搜索关键字
      currentPage: 1,
      pagesize: 5,
      filters: {
        keyword: ""
      },
      tableData: []
    };
  },
  mounted() {
    this.getGoodsList();
  },
  methods: {
    // 查询所有数据
    async getGoodsList() {
      let { data } = await this.$axios.get("http://120.78.213.100:2999/goods/");
      // console.log(data);
      this.tableData = data;
    },
    // 查询
    getUsers() {
      console.log("getUsers");
    },
    // 新增
    handleAdd() {
      this.$router.push("/goodList/addGoods");
    },
    // 编辑
    handleEdit(index, row) {
      // console.log(index, row);
      // console.log(Object.assign({}, row));
      var obj = Object.assign({}, row);
      var urlId = obj.goods_id;
      // console.log(urlId);
      this.$router.push("/goodList/editGoods/id=" + urlId);
    },
    // 删除商品
    handleDelete(index, row) {
      // console.log(index, row);
      this.$confirm("确认删除当前商品吗?", "提示", {
        confirmButtonClass: "el-button--warning"
      })
        .then(async () => {
          //确认
          let { data } = await this.$axios.delete(
            "http://localhost:2999/goods/" + row.goods_id
          );
          if (data.result.ok === 1) {
            this.$message({
              type: "info",
              message: "已成功修改"
            });
            this.getGoodsList();
          }
        })
        .catch(() => {});
      // 请求数据库删除，通过id删除
    },
    // 分页-每页条数
    handleSizeChange(val) {
      // console.log(`每页${val}条`);
      this.pagesize = val;
    },
    // 当前页
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.currentPage = val;
    }
  }
};
</script>
<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>