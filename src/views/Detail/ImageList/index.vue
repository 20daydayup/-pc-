<template>
  <div>
    <div class="spc-swiper">
      <div class="swiper-container" ref="swiper">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div
            class="swiper-slide"
            v-for="(skuImage, index) in skuImageList"
            :key="skuImage.id"
          >
            <img
              :src="skuImage.imgUrl"
              class="img"
              @click="updataCurrentImgIndex(index)"
            />
          </div>
        </div>

        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper, { Navigation } from "swiper";
Swiper.use([Navigation]);

export default {
  name: "ImageList",
  props: {
    skuImageList: Array,
    updataCurrentImgIndex: Function,
  },
  watch: {
    skuImageList() {
      this.$nextTick(() => {
        new Swiper(this.$refs.swiper, {
          slidesPerView: 5, //页面显示几张
          spaceBetween: 10, //图片中间的间隔
          slidesPerGroup: 5,
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

<style lang="less" scoped>
.spc-swiper {
  height: 56px;
  width: 400px;
  //   box-sizing: border-box;
  border: 1px solid #ccc;
}
.img {
  width: 50px;
  height: 50px;
  display: block;
  margin: 0 auto;
}
</style>
