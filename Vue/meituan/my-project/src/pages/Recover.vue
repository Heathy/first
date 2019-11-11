<template>
  <div>
    <section>
      <div class="activity-header">
        <span class="line left"></span>
        <svg class="activity-icon">
          <use xlink:href="#alarm" />
        </svg>
        限时好礼
        <span class="line right"></span>
      </div>
      <p class="activity-sub-title">金币换豪礼</p>
      <div class="activity-body">
        <a
          ubt-data-title="限时好礼"
          ubt-click="951"
          ubt-data-sort_index="0"
          ubt-data-requrest_id
          class="discover-food"
        >
          <img
            src="https://cube.elemecdn.com/e/02/d86b57a31e7a0740ab3af99bdd97cjpeg.jpeg?x-oss-process=image/format,webp"
            width="324"
            height="322"
          />
          <div>
            <p class="food-name ui-ellipsis">3元品质联盟红包</p>
            <div class="food-info clearfix">
              <div class="food-price">
                <span class="price ui-ellipsis">
                  <span>90金币</span>
                  <!---->
                </span>
                <del class="original-price ui-ellipsis">¥3</del>
              </div>
            </div>
          </div>
          <span class="discount">限时优惠</span>
        </a>
        <a
          ubt-data-title="限时好礼"
          ubt-click="951"
          ubt-data-sort_index="1"
          ubt-data-requrest_id
          class="discover-food"
        >
          <img
            src="https://cube.elemecdn.com/2/20/b0d0d94605fc31b9ee3ab651aa7c4jpeg.jpeg?x-oss-process=image/format,webp"
            width="324"
            height="322"
          />
          <div>
            <p class="food-name ui-ellipsis">数码经络按摩仪</p>
            <div class="food-info clearfix">
              <div class="food-price">
                <span class="price ui-ellipsis">
                  <span>9金币</span>
                  <!---->
                </span>
                <del class="original-price ui-ellipsis">¥239</del>
              </div>
            </div>
          </div>
          <span class="discount">特价换购</span>
        </a>
        <a
          ubt-data-title="限时好礼"
          ubt-click="951"
          ubt-data-sort_index="2"
          ubt-data-requrest_id
          class="discover-food"
        >
          <img
            src="https://cube.elemecdn.com/f/93/a096dd082d6c42f600e460fffaa39jpeg.jpeg?x-oss-process=image/format,webp"
            width="324"
            height="322"
          />
          <div>
            <p class="food-name ui-ellipsis">机械手感背光键盘套装</p>
            <div class="food-info clearfix">
              <div class="food-price">
                <span class="price ui-ellipsis">
                  <span>9金币</span>
                  <!---->
                </span>
                <del class="original-price ui-ellipsis">¥130</del>
              </div>
            </div>
          </div>
          <span class="discount">特价换购</span>
        </a>
      </div>
      <div class="activity-recommend wall-16TaH"></div>
      <!---->
      <p class="activity-more" @click="goto">
        查看更多
        <svg class="svg-next">
          <use xlink:href="#tab_found_next_page" />
        </svg>
      </p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: ""
    };
  },
  methods: {
    goto() {
      this.$router.push("/Liebiao");
    }
  }
};
</script>

<style lang="css">
section {
  margin-bottom: 0.28rem;
  margin-bottom: 2.8vw;
  background: #fff;
  border-top: 1px solid #eee;
  border-bottom: 0.013333rem solid #eee;
  border-bottom: 0.133333vw solid #eee;
}
.activity-header {
  padding-top: 0.52rem;
  padding-top: 5.2vw;
  text-align: center;
  font-size: 1.48rem;
  font-weight: 700;
  color: #333;
}
.line {
  display: inline-block;
  margin: 0.213333rem 0.093333rem 0.173333rem;
  margin: 2.133333vw 0.933333vw 1.733333vw;
  border: 1px solid #333;
  width: 0.4rem;
  width: 4vw;
  height: 0;
  position: relative;
}
.activity-icon {
  position: relative;
  top: 0.053333rem;
  top: 0.533333vw;
  width: 0.44rem;
  width: 4.4vw;
  height: 0.44rem;
  height: 4.4vw;
}
.line {
  display: inline-block;
  margin: 0.213333rem 0.093333rem 0.173333rem;
  margin: 2.133333vw 0.933333vw 1.733333vw;
  border: 1px solid #333;
  width: 0.4rem;
  width: 4vw;
  height: 0;
  position: relative;
}
.activity-sub-title {
  font-size: 0.83rem;
  color: #999;
  text-align: center;
  padding-bottom: 0.213333rem;
  padding-bottom: 2.133333vw;
}
.activity-body {
  padding: 0.32rem 0 0.4rem 0.4rem;
  padding: 3.2vw 0 4vw 4vw;
  white-space: nowrap;
}
.discover-food {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 2.96rem;
  width: 29.6vw;
  margin-right: 0.16rem;
  margin-right: 1.6vw;
  overflow: hidden;
}
.discover-food img {
  width: 4.32rem;
  width: 30.2vw;
  height: 2.933333rem;
  height: 29.333333vw;
  margin-bottom: 0.253333rem;
  margin-bottom: 2.533333vw;
}
.discover-food .food-name {
  font-size: 0.346667rem;
  color: #333;
  margin-bottom: 0.133333rem;
  margin-bottom: 1.333333vw;
}
.discover-food .food-price {
  height: 0.64rem;
  height: 6.4vw;
  line-height: 0.64rem;
  line-height: 6.4vw;
}
.discover-food .price {
  font-size: 0.346667rem;
  height: 0.48rem;
  height: 4.8vw;
  line-height: 0.48rem;
  line-height: 4.8vw;
  color: #ff5339;
  margin-right: 0.093333rem;
  margin-right: 0.933333vw;
  max-width: 1.333333rem;
  max-width: 13.333333vw;
  display: inline-block;
  vertical-align: middle;
}
.discover-food .original-price {
  font-size: 0.293333rem;
  color: #aaa;
  max-width: 1.066667rem;
  max-width: 10.666667vw;
  display: inline-block;
  vertical-align: middle;
}
.activity-more {
  padding-top: 0;
}
.activity-more,
.gift-list-more {
  font-size: 0.346667rem;
  color: #999;
  text-align: center;
  padding: 0.4rem 0 0.48rem;
  padding: 4vw 0 4.8vw;
}
.svg-next {
  height: 0.24rem;
  height: 2.4vw;
  width: 0.133333rem;
  width: 1.333333vw;
  margin-left: 0.146667rem;
  margin-left: 1.466667vw;
}
</style>