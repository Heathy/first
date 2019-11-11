<template name="component-name">
  <div>
    <!-- 图标分隔符 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/manageList'}">管理员权限管理</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 新增点击按钮 -->
    <el-col class="toolbar" style="padding-top: 15px;">
      <el-form :inline="true">
        <el-form-item>
          <el-button type="primary" @click="handleAdd()">新增</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <!-- table 内容 -->
    <el-table :data="manageList" style="width: 100%" :border="true">
      <el-table-column label="用户名" prop="Name"></el-table-column>
      <el-table-column label="是否锁定" prop="IsLock" :formatter="IsLock"></el-table-column>
      <el-table-column label="创建时间" prop="CreateTime" :formatter="CreateTime"></el-table-column>
      <el-table-column label="操作者" prop="Role"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope>
          <el-button size="mini" type="primary" plain icon="el-icon-edit" @click="handleEdit">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="block">
      <el-pagination layout="prev, pager, next,jumper" :page-count="pageCount"></el-pagination>
    </div>
    <!--编辑界面-->
    <el-dialog title="编辑" :visible.sync="editFormVisible">
      <el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
        <el-form-item label="账号" prop="Name">
          <el-input v-model="editForm.Name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="Password">
          <el-input type="password" v-model="editForm.Password" :maxlength="20" :clearable="true"></el-input>
        </el-form-item>
        <el-form-item label="锁定">
          <el-radio-group v-model="editForm.IsLock">
            <el-radio class="radio" :label="true">是</el-radio>
            <el-radio class="radio" :label="false">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="角色">
          <el-select v-model="editForm.RoleID" placeholder="请选择角色">
            <el-option
              v-for="(item) in roleList"
              :key="item.id"
              :label="item.Name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="editFormVisible = false">取消</el-button>
        <el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
      </div>
    </el-dialog>
    <!-- 新增界面 -->
    <el-dialog title="新增" :visible.sync="addFormVisible">
      <el-form :model="addForm" label-width="80px" :rules="editFormRules" ref="addForm">
        <el-form-item label="账号" prop="Name">
          <el-input v-model="addForm.Name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="Password">
          <el-input type="password" v-model="addForm.Password" :maxlength="20" :clearable="true"></el-input>
        </el-form-item>
        <el-form-item label="角色">
          <el-select v-model="addForm.RoleID" placeholder="请选择角色">
            <el-option v-for="item in roleList" :key="item.ID" :label="item.Name" :value="item.ID"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="addFormVisible = false">取消</el-button>
        <el-button type="primary" @click.native="addSubmit">提交</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      manageList: [
        {
          ID: 1,
          Name: "test",
          Password: "test",
          Role: "平台管理员",
          CreateTime: "2019-11-14T15:06:02.3361147"
        },
        {
          ID: "2",
          Name: "admin",
          Password: "admin",
          IsLock: false,
          Role: "平台管理员",
          CreateTime: "2019-11-14T15:06:02.3361147"
        }
      ], //管理员列表
      pageIndex: 1,
      pageSize: 2,
      pageCount: 1,
      //编辑界面是否显示
      editFormVisible: false,
      editLoading: false,
      roleList: [{ id: 1, Name: "平台管理员" }, { id: 2, Name: "观察员" }],
      //编辑界面数据
      editForm: {
        IsLock: false,
        Name: "",
        Role: "",
        RoleID: "",
        Password: ""
      },
      // 表单验证
      editFormRules: {
        Name: [
          {
            required: true,
            message: "请输入账户",
            trigger: "blur"
          }
        ],
        Password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }
        ]
      },
      // 新增页面是否显示
      addFormVisible: false,
      //新增界面数据
      addForm: {
        IsLock: false,
        Name: "",
        RoleID: "",
        Password: ""
      }
    };
  },
  mounted() {
    // this.getInfo();
  },
  methods: {
    // 分页
    handleCurrentChange(val) {
      this.pageIndex = val;
      // this.getInfo();
    },
    // 时间转换
    CreateTime(row, time) {
      var date = row[time.property].replace("T", " ").split(".")[0];
      return date;
    },
    IsLock(row, lock) {
      var lock = row[lock.property];
      return lock ? "是" : "否";
    },
    handleEdit() {
      this.editFormVisible = true;
    },
    // 编辑信息
    editSubmit() {
      this.$refs.editForm.validate(valid => {
        if (valid) {
          //判断是否填写完整  --true
          this.$confirm("确认提交吗？", "提示", {}).then(() => {
            // console.log(this.manageList);
            for (let i = 0; i < this.manageList.length; i++) {
              if (this.manageList[i].Name == this.editForm.Name) {
                this.manageList[i].Password = this.editForm.Password;
                this.manageList[i].IsLock = this.editForm.IsLock;
              }
            }
            // console.log(this.manageList);
            this.editFormVisible = false;
          });
        }
      });
    },
    // 新增信息按钮
    handleAdd() {
      this.addFormVisible = true;
    },
    // 新增信息
    addSubmit() {
      this.$refs.addForm.validate(valid => {
        if (valid) {
          //判断是否填写完整  --true
          this.$confirm("确认提交吗？", "提示", {}).then(() => {
            // console.log(this.addForm);
            this.manageList.push({
              ID: "3",
              Name: this.addForm.Name,
              Password: this.addForm.Password,
              IsLock: this.addForm.IsLock,
              Role: "平台管理员",
              CreateTime: "2019-11-14T15:06:02.3361147"
            });
            this.addFormVisible = false;
          });
        }
      });
    }
  }
};
</script>
<style lang="">
</style>