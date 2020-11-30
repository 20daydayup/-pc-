<template>
  <!-- 全部商品部分 -->
  <div>
    <div class="MainNav-nav">
      <div class="container">
        <div class="allgoods">
          <h2>全部商品分类</h2>
          <div class="sort">
            <div class="all-sort">
              <div
                class="sort-first"
                v-for="first in categoryList"
                :key="first.categoryId"
              >
                <!-- 一级目录 -->
                <h3 class="list">
                  <a href="#">{{ first.categoryName }}</a>
                </h3>
                <div class="sort-second">
                  <div class="sub-item">
                    <dl
                      v-for="second in first.categoryChild"
                      :key="second.categoryId"
                    >
                      <!-- 二级目录 -->
                      <dt>
                        <a href="#"> {{ second.categoryName }}</a>
                      </dt>
                      <!-- 三级目录 -->
                      <dd>
                        <em
                          v-for="third in second.categoryChild"
                          :key="third.categoryId"
                        >
                          <a href="#">{{ third.categoryName }}</a>
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav>
          <a href="###">服装城</a>
          <a href="###">美妆馆</a>
          <a href="###">尚品汇超市</a>
          <a href="###">全球购</a>
          <a href="###">闪购</a>
          <a href="###">团购</a>
          <a href="###">有趣</a>
          <a href="###">秒杀</a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "MainNav",
  // data() {  //页面一进来就加载数据,和数据响应式
  //   return {
  //     categoryList: [],
  //   };
  // },
  computed: {
    ...mapState({
      // 对象中的数据，就会传递给组件   // categoryList就是组件能接受到的数据
      // 它的值是一个函数，函数内部会调用得到值   // 调用时会将所有vuex数据传递进去，就是state
      categoryList: (state) => state.home.categoryList,
    }),
  },
  methods: {
    // 函数直接写   注意：将来action函数名称和mutation函数名称不要重复
    ...mapActions(["getCategoryList"]),
  },
  mounted() {
    console.log(this);
    // 调用vuex的action函数
    this.getCategoryList();
  },
};
</script>

<style lang="less" scoped>
.MainNav-body {
  border-bottom: 2px solid #e1251b;
}
.container {
  width: 1200px;
  height: 45px;
  line-height: 45px;
  margin: 0 auto;
  display: flex;
  position: relative;
  text-align: center;
}
.allgoods h2 {
  width: 210px;
  height: 45px;
  background-color: #e1251b;
  color: #fff;
}
.sort {
  position: absolute;
  top: 47px;
  left: 0px;
  width: 210px;
  border: 1px solid #ccc;
}
.sort-first .list {
  height: 30px;
  line-height: 30px;
  padding-left: 15px;
  text-align: left;
  border-bottom: 1px solid #ccc;
}
.sort-second {
  border: 1px solid #ccc;
  position: absolute;
  top: 0px;
  left: 210px;
  width: 730px;
  height: 467px;
  display: none;
  background-color: #fff;
  z-index: 2;
  dl {
    // border: 1px solid red;
    display: flex;
    padding: 6px 0;
    dt {
      float: left;
      // border: 1px solid red;
      width: 54px;
      line-height: 22px;
      color: #000;
      font-weight: 700;
      text-align: right;
      padding: 3px 3px 0 0;
    }
    dd {
      float: left;
      // border: 1px solid red;
      overflow: hidden;
      padding: 3px 0 0;
      em {
        float: left;
        height: 14px;
        line-height: 14px;
        padding: 0 5px;
        margin: 5px;
        border-left: 1px solid #ccc;
      }
    }
  }
}
.sort-first:hover {
  .sort-second {
    display: block;
  }
}
nav {
  a {
    margin: 15px;
    font-size: 16px;
  }
}
// 轮播图
// .MainNav-list {
//   width: 1200px;
//   margin: 0 auto;
//   border: 1px solid red;
// }
// .sort-list {
//   height: 470px;
//   padding-left: 210px;
// }
// .center {
//   width: 740px;
// }
// .el-carousel__item h3 {
//   color: #475669;
//   font-size: 14px;
//   opacity: 0.75;
//   line-height: 150px;
//   margin: 0;
// }

// .el-carousel__item:nth-child(2n) {
//   background-color: #99a9bf;
// }

// .el-carousel__item:nth-child(2n + 1) {
//   background-color: #d3dce6;
// }
</style>
