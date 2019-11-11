<template name="component-name">
  <div>
    <!-- 图标分隔符 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/userList'}">注册用户管理</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 注册用户表格 -->
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%;margin-top:50px"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <!-- <el-table-column label="注册时间" width="120">
        <template slot-scope="scope">{{ scope.row.regtime }}</template>
      </el-table-column>-->
      <el-table-column label="注册时间" prop="regtime" :formatter="CreateTime"></el-table-column>
      <!-- <el-table-column prop="username" label="账号" width="120"></el-table-column> -->
      <el-table-column label="账号" width="120">
        <template slot-scope="scope">{{ scope.row.username }}</template>
      </el-table-column>
      <el-table-column prop="password" label="密码" width="120"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            plain
            icon="el-icon-edit"
            @click="handleDelete(scope.row)"
          >注销账号</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [],
      multipleSelection: []
    };
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    async getUserInfo() {
      let { data } = await this.$axios.get("http://120.78.213.100:2999/users/");
      this.tableData = data;
    },
    // 时间转换
    CreateTime(row, time) {
      var date = row[time.property].replace("T", " ").split(".")[0];
      return date;
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleDelete(row) {
      // 注销当前账号
      this.$confirm("确认注销账号吗?", "提示", {
        confirmButtonClass: "el-button--warning"
      })
        .then(async () => {
          //确认
          let { data } = await this.$axios.get(
            "http://120.78.213.100:2999/users/logoff",
            {
              params: {
                username: row.username
              }
            }
          );
          if (data.result.ok === 1) {
            this.$message({
              type: "info",
              message: "注销成功！"
            });
            this.getUserInfo();
          }
        })
        .catch(() => {});
    }
  }
};
</script>
<style lang="">
</style>