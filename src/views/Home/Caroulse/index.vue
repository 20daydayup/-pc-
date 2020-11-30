<template>
  <div>
    <!-- <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide><img src="./imgs/banner1.jpg" /></swiper-slide>
          <swiper-slide><img src="./imgs/banner1.jpg" /></swiper-slide>
          <swiper-slide><img src="./imgs/banner1.jpg" /></swiper-slide>
          <swiper-slide><img src="./imgs/banner1.jpg" /></swiper-slide>
          <swiper-slide><img src="./imgs/banner1.jpg" /></swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper> -->
    <el-carousel indicator-position="outside" height="454px" width="730px">
      <el-carousel-item>
        <img src="./imgs/banner1.jpg" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="./imgs/banner1.jpg" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="./imgs/banner1.jpg" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "Caroulse",
  // data() {
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
</style>