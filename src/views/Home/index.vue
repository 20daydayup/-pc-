<template>
  <div>
    <div class="home-body">
      <!-- 全部商品部分 -->
      <div class="home-nav">
        <div class="home-container">
          <div class="home-allgoods">
            <h2>全部商品分类</h2>
            <div class="sort">
              <div>
                <h3>图书、音像、电子书刊</h3>
                <div></div>
              </div>
            </div>
          </div>

          <ul>
            <li>服装城</li>
            <li>美妆馆</li>
            <li>尚品汇超市</li>
            <li>全球购</li>
            <li>闪购</li>
            <li>有趣</li>
            <li>秒杀</li>
          </ul>
        </div>
      </div>

      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  
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
