import Vue from "vue";
import router from "./router";
import App from "./App";

import store from "./store";
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/swiper-bundle.css'

//饿了么UI插件
import "./plugins/element.js";
//图片懒加载
import "./plugins/lazyload.js";

// 引入mockServer，为了加载里面代码
// 里面代码一旦加载，就去启动mock服务器，从而拦截相应的请求
import "./mock/mockServe";

// 引入公共资源
import "./styles/reset.css";
import "./styles/iconfont.css";
import "swiper/swiper-bundle.min.css"; //轮播图

Vue.config.productionTip = false;

// Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

new Vue({
  beforeCreate() {
    // 初始化全局事件总线对象
    Vue.prototype.$bus = this;
  },
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
