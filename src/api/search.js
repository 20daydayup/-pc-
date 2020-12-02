import request from "../utils/request";

// 封装一个发送请求的功能函数
export const reqGetProductList = (data) => {
  return request({
    method: "POST",
    url: "/list",
    data,
  });
};
