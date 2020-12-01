import request from "../utils/request";

import mockRequest from "../utils/mockRequest";
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

/**
 * 获取首页轮播图数据
 */
export const reqgetBanner = () => {
  return mockRequest({
    method: "GET",
    url: "/banners",
  });
};

/**
 * 获取首页楼层数据
 */
export const reqgetNiceGoods = () => {
  return mockRequest({
    method: "GET",
    url: "/niceGoods",
  });
};
