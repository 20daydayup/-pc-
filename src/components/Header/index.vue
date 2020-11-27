<template>
  <header class="header">
    <div class="header-top">
      <div class="header-container">
        <div class="header-login-list">
          <p>尚品汇欢迎您！</p>
          <p>
            <span>请</span>
            <a href="###" class="login">登录</a>
            <a href="###" class="rigister">免费注册</a>
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
        <a>
          <img src="./images/logo.png" />
        </a>
      </div>
      <div class="header-search">
        <form action="###">
          <input type="text" />
          <button>搜索</button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
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
