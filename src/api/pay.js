import request from "@utils/request";

//10. 获取订单交易页信息
export const reqGetTrade = () => {
  return request({
    method: "GET",
    url: "/order/auth/trade",
  });
};

//12. 提交订单
export const reqSubmitOrder = ({
  tradeNo,
  consignee,
  consigneeTel,
  deliveryAddress,
  paymentWay,
  orderComment,
  orderDetailList,
}) => {
  return request({
    method: "POST",
    url: `order/auth/submitOrder`,
    params: {
      // query参数
      tradeNo,
    },
    data: {
      consignee,
      consigneeTel,
      deliveryAddress,
      paymentWay,
      orderComment,
      orderDetailList,
    },
  });
};

//11. 获取订单信息列表
export const reqGetQRCode = (orderId) => {
  return request({
    method: "GET",
    url: `/payment/weixin/createNative/${orderId}`,
  });
};
