<template>
  <div>
    <div class="spc-magnifier">
      <img :src="urlImg" alt="图片" />
      <div class="mask"></div>
      <div class="big">
        <img :src="urlImg" alt="hah" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Zoom",
  props: {
    urlImg: String,
  },
  data() {
    return {};
  },
  methods: {
    move() {},
  },
};
</script>

<style lang="less" scoped>
.spc-magnifier {
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;
  position: relative;
  &:hover .big {
    display: block;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
.mask {
  width: 50%;
  height: 50%;
  position: absolute;
  top: 0px;
  background-color: rgba(0, 255, 0, 0.3);
}
.big {
  display: none;
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  position: absolute;
  left: 400px;
  top: 0px;
  overflow: hidden;
  img {
    width: 200%;
    height: 200%;
    max-width: 200%;
  }
}
</style>
