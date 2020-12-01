<template>
  <div class="main-caroulse">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="banner in banners" :key="banner.id">
          <img :src="banner.imgUrl" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      <!-- </div> -->
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
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
// 1. 引入swiper两个文件
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";

Swiper.use([Navigation, Pagination, Autoplay]);

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
  async mounted() {
    await this.getBanner();
    console.log(this);

    this.$nextTick(() => {
      new Swiper(".swiper-container", {
        loop: true, // 循环模式选项

        autoplay: {
          delay: 1000,
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
};
</script>

<style scoped>
.main-caroulse {
  width: 730px;
  overflow: hidden;
  height: 454px;
}
/* .el-carousel__item img {
  width: 730px;
  height: 454px;
} */
</style>