import request from "../utils/request";
/**
 * 获取首页三级分类数据
 */

export const reqgetBaseCategoryList = () => {
  // 将request的返回值返回出去
  // 外面可以接受到request返回值（promise对象），通过这个promise对象可以判断请求成功。失败
  return request({
    method: "GET",
    url: "/product/getBaseCategoryList",
  });
};
