<template>
  <div class="cart">
    <h4>全部商品</h4>
    <!-- 结算表头 -->
    <div class="cart-type">
      <div class="cart-title">
        <div>全部</div>
        <div>商品</div>
        <div>单价（元）数量</div>
        <div>数量</div>
        <div>小计（元）</div>
        <div>操作</div>
      </div>
    </div>
    <!-- 商品 -->
    <div class="cart-list">
      <ul v-for="cart in cartList" :key="cart.id">
        <li>
          <input type="checkbox" />
        </li>
        <li>
          <img :src="cart.imgUrl" />
          <div>{{ cart.skuName }}</div>
        </li>
        <li>
          <span class="price">{{ cart.skuPrice }}</span>
        </li>
        <li>
          <a href="#">
            <a href="#" class="mini">-</a>
            <input type="text" />
            <a href="#" class="plus">+</a>
          </a>
        </li>
        <li>
          <span class="sum">{{ cart.skuNum * cart.skuPrice }}</span>
        </li>
        <li>
          <a href="#">删除</a>
          <a href="#">移动到收藏夹</a>
        </li>
      </ul>
    </div>
    <!-- 结算部分 -->
    <div class="cart-tool">
      <div class="all-choose">
        <label> <input type="checkbox" /><i>全选</i></label>
      </div>
      <div class="option">
        <a href=":javescript">删除选中的商品</a>
        <a href="#">移到我的关注</a>
        <a href="#">清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="choosed">已选择<span>0</span>件商品</div>
        <div class="count">
          <em>总价（不含运费） ：</em>
          <i>0</i>
        </div>
        <div class="sumbtn">
          <a href="#">结算</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "ShopCart",
  computed: {
    //购物车没有数据
    ...mapState({
      cartList: (state) => state.shopcart.cartList,
    }),
  },
  methods: {
    ...mapActions(["getShopCart"]),
  },
  mounted() {
    this.getShopCart();
  },
};
</script>

<style lang="less" scoped>
.cart {
  width: 1200px;
  margin: 10px auto;
}
.cart-type {
  height: 52px;
}
.cart-title {
  display: flex;
  border: 1px solid #ddd;
  padding: 10px;
  background: #f5f5f5;
}
.cart-tool {
  border: 1px solid #ddd;
  padding: 0 10px;
  display: flex;
  // justify-content: space-between;
  height: 50px;
  line-height: 50px;
}
.option {
  margin: 0 20px;
  a {
    margin: 0 10px;
  }
}
.money-box {
  margin: 0 0 0 570px;
  display: flex;
}
</style>
