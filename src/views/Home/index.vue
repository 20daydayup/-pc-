<template>
  <div>
    <!-- 主要导航 -->
    <MainNav />
    <!--轮播图和列表-->
    <ListContainer />
    <!--今日推荐-->
    <TodayRecommend />
    <!-- 商品排行 -->
    <Rank />
    <!-- 猜你喜欢 -->
    <Like />
    <!--好物-->
    <NiceGoods
      v-for="niceGood in niceGoods"
      :key="niceGood.id"
      :niceGood="niceGood"
    />
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

import { mapActions, mapState } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapState({
      niceGoods: (state) => state.carousel.niceGoods,
    }),
  },
  methods: {
    ...mapActions(["getNiceGoods"]),
  },
  mounted(){
    this.getNiceGoods()
    console.log(this.niceGoods);
  },
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
</style>
