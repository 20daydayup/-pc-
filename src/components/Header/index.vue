<template>
  <header class="header">
    <div class="header-top">
      <div class="header-container">
        <div class="header-login-list">
          <p>尚品汇欢迎您！</p>
          <p>
            <span>请</span>
            <router-link to="/login" class="login">登录</router-link>
            <router-link to="/register" class="rigister">免费注册</router-link>
          </p>
        </div>
        <div class="header-type-list">
          <a href="###">我的订单</a>
          <a href="###">我的购物车</a>
          <a href="###">我的尚品汇</a>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <div class="header-bottom">
      <div class="header-logo">
        <router-link class="logo" title="尚品汇" to="/">
          <img src="./images/logo.png" />
        </router-link>
      </div>
      <div class="header-search">
        <form @submit.prevent="search">
          <!-- 
            问题：点击搜索，路径出现问号（原因是提交了表单）
            1. button 按钮如果没有type 那么在表单中 默认type就是submit
              此时会提交表单，事件就绑定在form上   @submit.prevent="search"
            2. 不用form表单    @click="search"
           -->
          <input type="text" v-model="searchText" />
          <button>搜索</button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    // search() {
    //   //获取搜索内容  后判断是否需要加parmas参数
    //   const { searchText } = this;
    //   const parmas = searchText ? `/${searchText}` : "";
    //   const location = "/search" + parmas;
    //   // 编程式导航：原因将来要做搜索功能（要发送请求）
    //   this.$router.push(location);
    // },

    search() {
      const { searchText } = this;
      const location = {
        name: "search",
        // query: {
        // },
      };
      if (searchText) {
        location.params = {
          searchText,
        };
      }

      // 添加query参数
      const { categoryName } = this.$route.query;
      if (categoryName) {
        location.query = this.$route.query;
      }
      //解决回退到首页问题，在search就replace
      //indexof（兼容性好，es6的方法），includes,starstwith都可以判断，
      // if (this.$route.path.indexOf("/search")) {
      if (this.$route.name === "search") {
        this.$router.replace(location);
      } else {
        this.$router.push(location);
      }
    },
  },
  mounted() {
    this.$bus.$on("clearkeyword", () => {
      //清空searchText
      this.searchText = "";
    });
  },
};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
}
.header-top {
  width: 100%;
  height: 30px;
  line-height: 30px;
  background-color: #eaeaea;
}
.header-container {
  width: 1200px;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
}
.header-login-list {
  display: flex;
  p {
    margin-right: 10px;
  }
  .rigister {
    padding: 0 5px;
    margin-left: 5px;
    border-left: 1px solid #b3aeae;
  }
}
.header-type-list a {
  padding: 0 10px;
  border-left: 1px solid #b3aeae;
}
a:nth-of-type(1) {
  border-left: 0px;
}
//头部搜索栏
.header-bottom {
  width: 1200px;
  height: 67px;
  line-height: 67px;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
}
.header-bottom .header-logo {
  line-height: 67px;
  img {
    vertical-align: middle;
  }
}
.header-search {
  input {
    box-sizing: border-box;
    width: 490px;
    height: 32px;
    padding: 0 5px;
    border: 2px solid #ea4a36;
    outline: none;
  }
  button {
    //   box-sizing: border-box;
    width: 68px;
    height: 32px;
    color: #fff;
    background-color: #ea4a36;
    border: none;
    font-size: 12px;
    outline: none;
  }
}
</style>
