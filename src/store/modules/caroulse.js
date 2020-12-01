// Caroulse组件的vuex状态 mock模拟数据
import { reqgetBanner } from "@api/home";

export default {
  state: {
    banners: [],
  },
  actions: {
    async getBanner({ commit }) {
      const banners = await reqgetBanner();
      commit("GET_BANNER", banners);
    },
  },
  mutations: {
    GET_BANNER(state, banners) {
      state.banners = banners;
    },
  },
};
