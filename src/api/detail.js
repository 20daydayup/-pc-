import request from "../utils/request";

// 封装一个发送请求的功能函数
export const reqGetProducDetail = (id) => {
  return request({
    method: "GET",
    url: `/item/${id}`,
  });
};
