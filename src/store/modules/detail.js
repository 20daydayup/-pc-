// search组件的vuex状态

import { reqGetProducDetail } from "@api/detail";

export default {
  state: {
    productDetail: {
      categoryView: {}, // 分类数据
      spuSaleAttrList: [], // 商品选择属性数据列表
      skuInfo: {
        skuImageList: [],
      }, //  商品详情数据
    },
  },
  getters: {
    categoryView(state) {
      return state.productDetail.categoryView;
    },
    skuInfo(state) {
      return state.productDetail.skuInfo;
    },
    spuSaleAttrList(state) {
      return state.productDetail.spuSaleAttrList;
    },
  },
  actions: {
    async getProducDetail({ commit }, id) {
      const productDetail = await reqGetProducDetail(id);
      commit("GET_PRODUC_DETAIL", productDetail);
    },
  },
  mutations: {
    GET_PRODUC_DETAIL(state, productDetail) {
      state.productDetail = productDetail;
    },
  },
};
