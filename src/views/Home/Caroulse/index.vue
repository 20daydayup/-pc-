<template>
  <div class="main-caroulsse">
    <!-- <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
    </div> -->
    <!-- 如果需要分页器 -->
    <!-- <div class="swiper-pagination"></div> -->

    <!-- 如果需要导航按钮 -->
    <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->

    <!-- 如果需要滚动条 -->
    <!-- <div class="swiper-scrollbar"></div> -->
    <!-- </div> -->
    <!-- mock模拟数据 -->
    <el-carousel indicator-position="outside" height="454px">
      <el-carousel-item v-for="banner in banners" :key="banner.id">
        <img :src="banner.imgUrl" />
      </el-carousel-item>
      <!-- 初始版 -->
      <!-- <el-carousel-item>
        <img src="./imgs/banner1.jpg" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="./imgs/banner1.jpg" />
      </el-carousel-item> -->
    </el-carousel>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Caroulse",
  computed: {
    ...mapState({
      banners: (state) => state.caroulse.banners,
    }),
  },
  methods: {
    ...mapActions(["getBanner"]),
  },
  mounted() {
    this.getBanner();
    // console.log(this);

    

  // data(){
  //   return {
  //     swiperOptions: {
  //       pagination: {
  //         el: ".swiper-pagination",
  //       },
  //       // Some Swiper option/callback...
  //     },
  //   };
  // },
  // computed: {
  //   swiper() {
  //     return this.$refs.mySwiper.$swiper;
  //   },
  // },
  // mounted() {
  //   console.log("Current Swiper instance object", this.swiper);
  //   this.swiper.slideTo(3, 1000, false);
  // },
};
</script>

<style scoped>
.main-caroulse {
  width: 730px;
  overflow: hidden;
  height: 454px;
}
.el-carousel__item img {
  width: 730px;
  height: 454px;
}
</style>