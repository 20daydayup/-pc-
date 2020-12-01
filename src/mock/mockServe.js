import Mock from "mockjs";
import banners from "./rbanners.json";
import niceGoods from "./rfloors.json";

// 一旦运行就会拦截Get请求，请求地址/mock/banners
// 并最后参数作为响应结果响应~ main组件中也引入
Mock.mock("/mock/banners", "get", {
  code: 200,
  "data|4": banners,
});

Mock.mock("/mock/niceGoods", "get", {
  code: 200,
  "data|3": niceGoods,
});
