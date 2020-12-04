<template>
  <div class="register-container">
    <div class="register">
      <h3>
        注册新用户
        <span class="go"
          >我有账号，去 <router-link to="/">登陆</router-link></span
        >
      </h3>
      <div class="entry">
        <lable>手机号</lable>
        <el-input placeholder="请输入内容" v-model="phone" clearable>
          <span class="error-msg">error-msg</span>
        </el-input>
      </div>
      <div class="entry">
        <lable>验证码</lable>
        <el-input placeholder="请输入内容" v-model="code" clearable> </el-input>
        <span class="error-msg">手机号是必须的</span>
      </div>
      <div class="entry">
        <lable>登录密码</lable>
        <el-input
          placeholder="请输入密码"
          v-model="password"
          show-password
        ></el-input>
        <span class="error-msg">验证码是必须的</span>
      </div>
      <div class="entry">
        <lable>确认登录密码</lable>
        <el-input
          placeholder="请输入密码"
          v-model="repassword"
          show-password
        ></el-input>
        <span class="error-msg">验证码是必须的</span>
      </div>
      <div class="check-box">
        <input type="checkbox" />
        <span>同意协议并注册《尚品汇用户协议》</span>
        <span class="error-msg">error-msg</span>
      </div>
      <div class="entry">
        <span></span>
        <el-button type="danger" class="btn">完成注册</el-button>
        <span class="error-msg">error-msg</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      phone: "",
      code: "",
      password: "",
      repassword: "",
    };
  },
};
</script>

<style lang="less" scoped>
.register {
  width: 1200px;
  height: 445px;
  margin: 10px auto;
  border: 1px solid #eaeaea;
  h3 {
    background: #eaeaea;
    font-size: 20px;
    padding: 10px;
  }
  .entry {
    display: flex;
    justify-content: center;
    margin: 10px 5px;
    line-height: 40px;
    lable {
      display: block;
      height: 40px;
      line-height: 40px;
      width: 80px;
      text-align: center;
      padding: 8px 5px;
    }
  }
}
.el-input {
  width: 300px;
  height: 38px;
  padding: 8px 5px 3px;
}
.go {
  font-size: 16px;
  float: right;
  a {
    color: #e1251b;
  }
}
.check-box {
  height: 30px;
  line-height: 30px;
  text-align: center;
  input {
    margin: 0px 10px 5px 55px;
  }
}
.btn {
  width: 300px;
  height: 38px;
}
</style>
