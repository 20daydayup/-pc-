import {
  reqGetShopCart,
  // reqAddShopCart,
  reqUpdateCartCount,
  // reqDelShopCart,
} from "@api/shopcart";

export default {
  state: {
    cartList: [], // 所有购物车数据
  },

  getters: {},

  actions: {
    async getShopCart({ commit }) {
      const cartList = await reqGetShopCart();
      commit("GET_SHOP_CART", cartList);
    },
    async updateCartCount({ commit }, { skuId, skuNum }) {
      await reqUpdateCartCount(skuId, skuNum);
      // 1. 手动更新vuex的数据 --> 页面就会重新渲染
      // 2. 重新请求所有购物车数据
      commit("UPDATE_CART_COUNT", { skuId, skuNum });
    },
  },

  mutations: {
    GET_SHOP_CART(state, cartList) {
      state.cartList = cartList;
    },
    UPDATE_CART_COUNT(state, { skuId, skuNum }) {
      state.cartList = state.cartList.map((cart) => {
        if (cart.skuId === skuId) {
          state.skuNum += skuNum;
        }
        return cart;
      });
    },
  },
};
