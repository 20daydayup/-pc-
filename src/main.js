import Vue from "vue";
import router from "./router";
import App from "./App";
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

import "./styles/reset.css";
import './plugins/element.js'

Vue.config.productionTip = false;

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
