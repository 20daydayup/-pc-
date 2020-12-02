<template>
  <!-- 全部商品部分 -->
  <div>
    <div class="MainNav-nav">
      <div class="container">
        <div
          class="allgoods"
          @mouseenter="isSearchShow = true"
          @mouseleave="isSearchShow = false"
        >
          <h2>全部商品分类</h2>
          <!-- 添加过渡效果 name控制样式-->
          <transition name="hide">
            <div class="sort" v-show="isHomeShow || isSearchShow">
              <div class="all-sort" @click="goSearch">
                <div
                  class="sort-first"
                  v-for="first in categoryList"
                  :key="first.categoryId"
                >
                  <!-- 一级目录 -->
                  <h3 class="list">
                    <a
                      :data-categoryName="first.categoryName"
                      :data-categoryId="first.categoryId"
                      :data-categoryType="1"
                      >{{ first.categoryName }}</a
                    >
                  </h3>
                  <div class="sort-second">
                    <div class="sub-item">
                      <dl
                        v-for="second in first.categoryChild"
                        :key="second.categoryId"
                      >
                        <!-- 二级目录 -->
                        <dt>
                          <a
                            :data-categoryName="second.categoryName"
                            :data-categoryId="second.categoryId"
                            :data-categoryType="2"
                          >
                            {{ second.categoryName }}</a
                          >
                        </dt>
                        <!-- 三级目录 -->
                        <dd>
                          <em
                            v-for="third in second.categoryChild"
                            :key="third.categoryId"
                          >
                            <a
                              :data-categoryName="third.categoryName"
                              :data-categoryId="third.categoryId"
                              :data-categoryType="3"
                              >{{ third.categoryName }}</a
                            >
                          </em>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
        <nav class="nav">
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
  data() {
    //页面一进来就加载数据,和数据响应式
    return {
      // categoryList: [],
      //如果是home就显示
      isHomeShow: this.$route.path === "/",
      isSearchShow: false,
    };
  },
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
    //搜索页面
    goSearch(e) {
      //事件委托，只绑定一次事件给a，提高性能。  通过自定义属性获取数据
      console.log(e.target.dataset);
      const { categoryname, categoryid, categorytype } = e.target.dataset;

      //只点中a标签才跳转
      if (!categoryname) return;

      const location = {
        name: "search", //命名路由
        query: {
          categoryName: categoryname,
          [`category${categorytype}Id`]: categoryid,
        },
      };

      // 判断当前是否有params参数，有加上  Header组件中search也要保存require参数
      const { searchText } = this.$route.params;
      if (searchText) {
        location.params = {
          searchText,
        };
      }
      if (this.$route.name === "search") {
        this.$router.replace(location);
      } else {
        this.$router.push(location);
      }
    },
  },
  mounted() {
    console.log(this);
    //请求之前判断有没有vuex数据,有就显示缓存数据，减少请求数据
    if (this.categoryList.length) return;

    // 调用vuex的action函数 发送请求
    this.getCategoryList();
  },
};
</script>

<style lang="less" scoped>
.MainNav-nav {
  border-bottom: 2px solid #e1251b;
  height: 45px;
}
.container {
  width: 1200px;
  height: 45px;
  margin: 0 auto;
  display: flex;
  position: relative;
  text-align: center;
}
.allgoods h2 {
  height: 45px;
  line-height: 45px;
  width: 210px;
  background-color: #e1251b;
  color: #fff;
}
.sort {
  position: absolute;
  top: 46px;
  left: 0px;
  width: 210px;
  height: 474px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  background-color: #fafafa;
  // 控制显示隐藏过渡效果
  &.hide-enter-active {
    transition: height 0.5s;
    overflow: hidden;
  }
  &.hide-enter {
    height: 0px;
  }
}

.sort-first .list {
  height: 29px;
  line-height: 29px;
  padding-left: 15px;
  text-align: left;
  // border-bottom: 1px solid #ccc;
  overflow: hidden;
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
  z-index: 10;
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
  background-color: #ccc;
  .sort-second {
    display: block;
  }
}
.nav {
  line-height: 45px;
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
</style>
