import Vue from "vue";
import router from "./router";
import App from "./App";

import "./styles/reset.css";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
