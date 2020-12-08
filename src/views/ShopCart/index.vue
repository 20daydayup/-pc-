<template>
  <div class="cart">
    <h4>全部商品</h4>
    <!-- 结算表头 -->
    <div class="cart-type">
      <div class="cart-title">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价（元）数量</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
    </div>
    <!-- 商品 -->
    <div class="cart-list">
      <ul v-for="cart in cartList" :key="cart.id">
        <li class="cart-th1">
          <input type="checkbox" v-model="cart.isChecked" />
          <!-- :checked="isChecked === true ? 1 : 0"
            @Click="choosed(cart.id, isChecked)" -->
        </li>
        <li class="cart-th2">
          <img :src="cart.imgUrl" class="img" />
          <div>{{ cart.skuName }}</div>
        </li>
        <li class="cart-th3">
          <span class="price">{{ cart.skuPrice }}</span>
        </li>
        <li class="cart-th4">
          <button
            class="mini"
            @click="updataCount(cart.skuId, -1, cart.skuNum)"
            :disabled="cart.skuNum === 1"
          >
            -
          </button>
          <input
            type="text"
            :value="cart.skuNum"
            @blur="updata(cart.skuId, cart.skuNum, $event)"
            @input="formatSkuNum"
          />
          <button
            class="plus"
            @click="updataCount(cart.skuId, 1, cart.skuNum)"
            :disabled="cart.skuNum === 10"
          >
            +
          </button>
        </li>
        <li class="cart-th5">
          <span class="sum">{{ cart.skuNum * cart.skuPrice }}</span>
        </li>
        <li class="cart-th6">
          <a href="#">删除</a>
          <a href="#">移动到收藏夹</a>
        </li>
      </ul>
    </div>
    <!-- 结算部分 -->
    <div class="cart-tool">
      <div class="all-choose">
        <label>
          <input type="checkbox" /><i>&nbsp;&nbsp;&nbsp;&nbsp;全选</i></label
        >
      </div>
      <div class="option">
        <a href=":javescript">删除选中的商品</a>
        <a href="#">移到我的关注</a>
        <a href="#">清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="choosed">
          已选择<i>{{ total }}</i
          >件商品
        </div>
        <div class="count">
          <em>总价（不含运费） ：</em>
          <i>{{ count }}</i>
        </div>
        <div class="sumbtn">
          <button @click="submit">结算</button>
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
    // 商品总数 计算选中
    total() {
      return this.cartList
        .filter((cart) => cart.isChecked)
        .reduce((p, c) => p + c.skuNum, 0);
    },
    count() {
      return this.cartList
        .filter((cart) => cart.isChecked)
        .reduce((p, c) => p + c.skuNum * c.skuPrice, 0);
    },
    //isChecked
    // isChecked(){
    //   set(){

    //   }
    // }
  },
  methods: {
    ...mapActions(["getCartList", "updateCartCount"]),
    // async choosed(id, checked) {
    //   const ischecked = checked;
    //   await updateCartCheck(id, ischecked);
    // },

    //验证value值
    formatSkuNum(e) {
      let skuNum = +e.target.value.replace(/\D+/g, "");
      if (skuNum < 1) {
        skuNum = 1; // 商品数量不能小于1
      } else if (skuNum > 10) {
        skuNum = 10;
      }
      e.target.value = skuNum;
    },

    updata(skuId, skuNum, e) {
      //优化：没有修改就不发请求
      if (e.target.value === skuNum) return;

      this.updateCartCount({ skuId, skuNum: e.target.value - skuNum });
    },

    async updataCount(skuId, skuNum) {
      // 更新商品
      await this.updateCartCount({ skuId, skuNum });
      // 刷新页面 在vuex中修改数据可以直接修改
      // this.getCartList();
    },

    //结算跳转
    submit() {
      this.$router.push("/trade");
    },
  },
  mounted() {
    this.getCartList();
  },
};
</script>

<style lang="less" scoped>
.cart {
  width: 1200px;
  margin: 10px auto;
}
.cart-type {
  height: 36px;
}
.cart-title {
  display: flex;
  border: 1px solid #ddd;
  padding: 10px;
  background: #f5f5f5;
}
.cart-th1 {
  width: 30%;

  span {
    text-align: center;
    vertical-align: middle;
  }
}

.cart-th2 {
  width: 40%;
}

.cart-th3,
.cart-th4,
.cart-th5,
.cart-th6 {
  input {
    vertical-align: middle;
    width: 20px;
    margin: 0 10px;
  }
  width: 18.5%;
}

//商品列表
.cart-list {
  border: 1px solid #ddd;
  ul {
    display: flex;
    padding: 5px 15px;
    border-bottom: 1px solid #ddd;
    .img {
      height: 50px;
    }
  }
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
  margin: 0 0 0 430px;
  display: flex;
  justify-content: space-around;
  div {
    margin: 0 10px;
  }
  i {
    color: red;
    margin: 0 5px;
    font-size: 18px;
  }
}
</style>
