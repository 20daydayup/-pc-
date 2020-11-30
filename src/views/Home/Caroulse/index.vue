<template>
  <div>
    <div class="MainNav-list">
      <div class="sort-list">
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide><img src="./imgs/banner1.jpg" /></swiper-slide>
          <swiper-slide><img src="./imgs/banner1.jpg" /></swiper-slide>
          <swiper-slide><img src="./imgs/banner1.jpg" /></swiper-slide>
          <swiper-slide><img src="./imgs/banner1.jpg" /></swiper-slide>
          <swiper-slide><img src="./imgs/banner1.jpg" /></swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Caroulse",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        // Some Swiper option/callback...
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  },
};
</script>

<style scoped>
.MainNav-list {
  width: 1200px;
  margin: 0 auto;
  border: 1px solid red;
}
.sort-list {
  height: 470px;
  padding-left: 210px;
}
.center {
  width: 740px;
}
</style>