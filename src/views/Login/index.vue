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
          <form @submit.prevent="sumbit">
            <div>
              <i></i
              ><input type="text" placeholder="手机号" v-model="user.phone" />
            </div>
            <ValidationProvider rules="required" v-slot="{ errors }">
              <div>
                <i></i>
                <input
                  type="password"
                  placeholder="请输入密码"
                  v-model="user.password"
                />
                <p :style="{ color: 'red' }">{{ errors[0] }}</p>
              </div>
            </ValidationProvider>
            <div class="login-checkbox">
              <label>
                <input
                  type="checkbox"
                  v-model="user.isAutoLogin"
                />自动登录</label
              >
              <a href="#"><span>忘记密码？</span></a>
            </div>
            <!-- <button @click="login">登录</button> -->
            <button type="submit">登&nbsp;&nbsp;&nbsp;录</button>
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
import { mapState } from "vuex";
import { ValidationProvider, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";
// import { reqLogin } from "../../api/user";

extend("required", required);

export default {
  name: "Login",
  data() {
    return {
      user: {
        phone: "",
        password: "",
      },
      isAutoLogin: true, //自动登录
      isLogining: false, //正在登录
    };
  },
  computed: {
    ...mapState({
      token: (state) => state.user.token,
      name: (state) => state.user.name,
    }),
  },
  created() {
    /*
      自动登录：
        在login组件判断是否有token
        有就认为登录过，跳转到首页

        不够安全：token是可以伪造的
        解决：拿到token发送请求
          1. 验证token的合法性（正确，没有过期）
          2. 请求用户数据
    */
    // this.localStorage.getItem("token");
    if (this.token) {
      this.$router.replace("/");
    }
  },
  methods: {
    async submit() {
      try {
        if (this.isLogining) return;
        this.isLogining = true;

        const { phone, password } = this.user;
        await this.$store.dispatch("login", { phone, password });
        //登录成功 并且勾选自动登录，存储token，方便下次自动登录
        //存储在localStorage中，vuex中的数据存在内存刷新就会没有
        if (this.isAutoLogin) {
          // localStorage.setItem("token", this.$store.state.user);
          localStorage.setItem("token", this.token); //token在vuex中获取，存储后判断存在，在就自动登录，所以要在vuex读取token，影射到组件中，组件再读取
          localStorage.setItem("name", this.name);
        }
        this.$router.replace("/");
      } catch {
        this.isLogining = false;
      }
    },
  },
  components: {
    ValidationProvider,
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
