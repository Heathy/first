<template name="component-name">
  <div>
    <!-- 图标分隔符 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/goodList'}">商品信息管理</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/goodList/editGoods'}">编辑商品信息</el-breadcrumb-item>
    </el-breadcrumb>
    <el-main style="width:70%;margin-top:30px;">
      <el-form
        :model="addForm"
        :rules="rules"
        ref="addForm"
        label-width="150px"
        class="demo-addForm"
      >
        <el-form-item label="商品名称" prop="goods_name">
          <el-input v-model="addForm.goods_name"></el-input>
        </el-form-item>
        <el-form-item label="商品价格（元）" prop="goods_promotion_price">
          <el-input v-model.number="addForm.goods_promotion_price"></el-input>
        </el-form-item>
        <el-form-item label="店铺名称" prop="store_name">
          <el-input v-model.number="addForm.store_name"></el-input>
        </el-form-item>
        <el-form-item label="店铺 ID" prop="store_id">
          <el-input v-model.number="addForm.store_id"></el-input>
        </el-form-item>
        <el-form-item label="商品库存" prop="sell_out">
          <el-input v-model.number="addForm.sell_out"></el-input>
        </el-form-item>
        <el-form-item label="图片路径" prop="goods_image">
          <el-input v-model.number="addForm.goods_image"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('addForm')">立即修改</el-button>
          <el-button @click="resetForm('addForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </div>
</template>
<script>
export default {
  data() {
    var checkPrice = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("价格不能为空"));
      }
      setTimeout(() => {
        // 是否为整数Number.isInteger
        if (!Number(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 0) {
            callback(new Error("必须大于0"));
          } else {
            callback();
          }
        }
      }, 100);
    };
    var checkStock = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("库存不能为空"));
      }
      setTimeout(() => {
        // 是否为数字
        if (!Number(value)) {
          callback(new Error("请输入数字值"));
        } else if (value % 1 !== 0) {
          callback(new Error("库存必须为整数"));
        } else {
          if (value < 0) {
            callback(new Error("必须大于0"));
          } else {
            callback();
          }
        }
      }, 100);
    };
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      addForm: {
        goods_name: "", //商品名称
        store_name: "", //店铺名称
        store_id: "", //店铺id
        // goods_id: "", //商品id
        goods_image: "", //图片路径
        sell_out: "", //商品库存
        goods_promotion_price: "" //商品价格
      },
      // 表单校验规则
      rules: {
        goods_name: [
          {
            required: true,
            message: "请输入商品名称",
            trigger: "blur"
          }
        ],
        goods_promotion_price: [
          {
            validator: checkPrice
          }
        ],
        sell_out: [
          {
            validator: checkStock
          }
        ],
        store_name: [
          {
            required: true,
            message: "请输入店铺名称",
            trigger: "blur"
          }
        ],
        store_id: [
          {
            required: true,
            message: "请输入店铺id",
            trigger: "blur"
          }
        ],
        goods_image: [
          {
            required: true,
            message: "请输入商品图片路径",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    // 修改商品信息
    submitForm() {
      let {
        goods_name,
        goods_promotion_price,
        goods_image,
        store_id,
        store_name,
        sell_out
      } = this.addForm;
      let { goods_id } = { goods_id: this.$route.params.id.split("=")[1] };
      // console.log(goods_id);
      this.$confirm("确认添加此商品吗?", "提示", {
        confirmButtonClass: "el-button--warning"
      })
        .then(async () => {
          // console.log({ goods_id });
          //确认
          let { data } = await this.$axios.post(
            "http://120.78.213.100:2999/goods/change",
            {
              goods_id,
              goods_name,
              goods_promotion_price,
              goods_image,
              store_id,
              store_name,
              sell_out
            }
          );
          if (data.result.ok === 1) {
            this.$message({
              type: "info",
              message: "已成功修改"
            });
            this.$router.push("/goodList");
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "修改商品信息失败"
          });
        });
    },
    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang="">
</style>