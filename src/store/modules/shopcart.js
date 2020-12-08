import {
  // reqDelCart,
  reqGetCartList,
  // reqUpdateCartCheck,
  reqUpdateCartCount,
} from "@api/shopcart";

export default {
  state: {
    cartList: [], //所有购物车数据
  },
  getters: {},
  actions: {
    async getCartList({ commit }) {
      const cartList = await reqGetCartList();
      commit("GET_CART_LIST", cartList);
    },
    async updateCartCount({ commit }, { skuId, skuNum }) {
      await reqUpdateCartCount(skuId, skuNum);
      // 1. 手动更新vuex的数据 --> 页面就会重新渲染
      // 2. 重新请求所有购物车数据
      commit("UPDATE_CART_COUNT", { skuId, skuNum });
    },
    async,
  },
  mutations: {
    GET_CART_LIST(state, cartList) {
      state.cartList = cartList;
    },
    UPDATE_CART_COUNT(state, { skuId, skuNum }) {
      //直接在vuex中修改数据，页面会自动重新更新，不用再次发送请求
      state.cartList = state.cartList.map((cart) => {
        if (cart.skuId === skuId) {
          cart.skuNum += skuNum;
        }
        return cart;
      });
    },
  },
};
