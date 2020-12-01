<template>
  <div class="main-caroulse">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="carousel in carouselList"
          :key="carousel.id"
        >
          <img :src="carousel.imgUrl" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    <!-- mock模拟数据 -->
    <!--  <el-carousel indicator-position="outside" height="454px">
      <el-carousel-item v-for="banner in banners" :key="banner.id">
        <img :src="banner.imgUrl" />
      </el-carousel-item> -->
    <!-- 初始版 -->
    <!-- <el-carousel-item>
        <img src="./imgs/banner1.jpg" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="./imgs/banner1.jpg" />
      </el-carousel-item> -->
    <!-- </el-carousel> -->
  </div>
</template>

<script>
// 1. 引入swiper两个文件
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";

Swiper.use([Navigation, Pagination, Autoplay]);

export default {
  name: "Caroulse",
  props: {
    carouselList: {
      type: Array,
      required: true,
    },
  },
  watch: {
    carouselList() {
      // 轮播图数据要有 且 轮播图DOM元素要渲染完成 才能 new Swiper
      // [] --> 最终的数据 数据发生变化才会触发
      // 轮播图DOM元素要渲染完成 --> 轮播图数据
      // watch为了确保有轮播图数据
      // this.$nextTick为了确保轮播图数据已经渲染成DOM元素

      // 确保：swiper不能new多次
      if (this.swiper) return;
      this.$nextTick(() => {
        new Swiper(".swiper-container", {
          loop: true, // 循环模式选项

          autoplay: {
            delay: 1000,
            disableOnInteraction: false,
          },

          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },

          // 如果需要前进后退按钮
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
      });
    },
  },
};
</script>

<style scoped>
/* .main-caroulse {
  width: 730px;
  overflow: hidden;
  height: 454px;
} */
/* .el-carousel__item img {
  width: 730px;
  height: 454px;
} */
</style>