<template>
  <div>
    <!-- 主要导航 -->
    <MainNav />
    <!--列表-->
    <ListContainer />
    <!--今日推荐-->
    <TodayRecommend />
    <!-- 商品排行 -->
    <Rank />
    <!-- 猜你喜欢 -->
    <Like />
    <!--好物-->
    <NiceGoods />
    <!--好物-->
    <NiceGoods />
    <!--商标-->
    <Brand />
  </div>
</template>

<script>
import Brand from "./Brand";
import Like from "./Like";
import ListContainer from "./ListContainer";
import MainNav from "../../components/MainNav";
import NiceGoods from "./NiceGoods";
import Rank from "./Rank";
import TodayRecommend from "./TodayRecommend";

export default {
  name: "Home",
  components: {
    MainNav,
    Brand,
    Like,
    ListContainer,
    NiceGoods,
    Rank,
    TodayRecommend,
  },
};
</script>

<style lang="less" scoped>
.home-body {
  width: 100%;
  height: 45px;
}
.home-nav {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  div {
  }
}
</style>
