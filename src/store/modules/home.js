// home组件的vuex状态

import { reqgetBaseCategoryList } from "@api/home";

export default {
  state: {
    categoryList: [], // 首页三级分类列表数据
  },

  actions: {
    // 获取首页三级分类列表数据
    async getCategoryList({ commit }) {
      // 发送请求
      const categoryList = await reqgetBaseCategoryList();
      // 触发mutation函数
      commit("GET_BASECATEGORY_LIST", categoryList);
    },
  },
  mutations: {
    GET_BASECATEGORY_LIST(state, categoryList) {
      state.categoryList = categoryList.slice(0, 16);
    },
  },
};
