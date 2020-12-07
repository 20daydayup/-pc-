import { reqRegistor, reqLogin } from "@api/user";

export default {
  state: {
    name: localStorage.getItem("name") || "",
    token: localStorage.getItem("token") || "",
  },
  actions: {
    async registor({ commit }, { phone, password, code }) {
      await reqRegistor({ commit }, { phone, password, code });
      console.log(commit);
    },
    async login({ commit }, { phone, password }) {
      const user = await reqLogin(phone, password);
      commit("LOGIN", user);
    },
  },
  mutations: {
    LOGIN(state, user) {
      state.name = user.name;
      state.token = user.token;
    },
  },
};
