<template>
  <div class="login-warp">
    <div class="login-container">
      <div class="login-form">
        <ul class="login-way">
          <li>
            <a href="">扫描登录</a>
          </li>
          <li>
            <a href="">账户登录</a>
          </li>
        </ul>
        <div class="login-content">
          <form @submit.prevent="">
            <div><i></i><input type="text" placeholder="手机号" /></div>
            <div>
              <i></i>
              <input type="password" placeholder="请输入密码" />
            </div>
            <div class="login-checkbox">
              <label> <input type="checkbox" />自动登录</label>
              <a href="#"><span>忘记密码？</span></a>
            </div>
            <!-- <button @click="login">登录</button> -->
            <el-button @click="login" type="danger">登录</el-button>
          </form>
          <div class="login-block">
            <a>忘记用户名</a>
            <a>免费注册</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reqLogin } from "../../api/user";

export default {
  name: "Login",
  methods: {
    login() {
      reqLogin("13700000000", "111111")
        .then((res) => {
          console.log(res, "res");
        })
        .catch((err) => {
          console.log(err, "err");
        });
    },
  },
};
</script>

<style lang="less" scoped>
.login-warp {
  height: 487px;
  background-color: #e93854;
}
.login-container {
  width: 1200px;
  height: 487px;
  margin: 0px auto;
  background: url("./image/loginbg.png") no-repeat;
}
.login-form {
  box-sizing: border-box;
  width: 420px;
  height: 406px;
  background-color: #fff;
  padding: 20px;
  position: relative;
  top: 45px;
  left: 780px;
}
.login-way {
  display: flex;
  justify-content: space-around;
  li {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    box-sizing: border-box;
    border: 1px solid #ddd;
    a {
      font-size: 20px;
      font-weight: 700;
      text-decoration: none;
      color: #000;
    }
  }
}
.login-content {
  width: 380px;
  height: 316px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-top: none;
  padding: 18px;
}
form {
  margin: 15px 0;
  div {
    margin-bottom: 25px;
    display: flex;
    i {
      display: block;
      width: 37px;
      height: 32px;
      border: 1px solid #ccc;
      box-sizing: border-box;
    }
  }
  input[type="text"],
  input[type="password"] {
    width: 302px;
    height: 32px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-left: none;
    padding: 5px;
    font-size: 16px;
    outline: none;
  }
}
.login-checkbox {
  display: flex;
  justify-content: space-between;
}
button {
  width: 100%;
  height: 45px;
  // outline: none;
  // // background-color: #e1251b;
  // color: #fff;
  // border: none;
  // padding: 6px;
}
.login-block {
  margin: 40px 0;
  padding-left: 200px;

  a {
    margin-left: 8px;
  }
}
</style>
