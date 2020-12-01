//Carousel组件的vuex状态 mock模拟数据
import { reqgetBanner ,reqgetNiceGoods} from "@api/home";

export default {
  state: {
    banners: [],
    niceGoods: [],
  },
  actions: {
    async getBanner({ commit }) {
      const banners = await reqgetBanner();
      commit("GET_BANNER", banners);
    },
    async getNiceGoods({ commit }) {
      const niceGoods = await reqgetNiceGoods();
      commit("GET_NICEGOODS", niceGoods);
    },
  },
  mutations: {
    GET_BANNER(state, banners) {
      state.banners = banners;
    },
    GET_NICEGOODS(state, niceGoods) {
      state.niceGoods = niceGoods;
    },
  },
};
