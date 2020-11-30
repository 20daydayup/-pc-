<template>
  <div>
    <div class="rank">
      <div class="rank-tab">
        <a href="#">
          <p>
            <i></i>
          </p>
          <p>热卖排行</p>
        </a>
        <a href="#">
          <p>
            <i></i>
          </p>
          <p>特价排行</p>
        </a>
        <a href="#">
          <p>
            <i></i>
          </p>
          <p>新品排行</p>
        </a>
      </div>
      <div class="rank-contant">
        <ul>
          <li class="lis">
            <p class="pho">
              <img src="" />
            </p>
            <div>
              <div class="title">
                <a href="#">
                  【官网价直降1100】Apple iPhone 8 Plus 256GB 银色
                  移动联通电信4G手机
                </a>
              </div>
              <p class="price">定金：¥100.00</p>
            </div>
          </li>
          <li class="lis">
            <p class="pho">
              <img src="" />
            </p>
            <div>
              <div class="title">
                <a href="#">
                  【官网价直降1100】Apple iPhone 8 Plus 256GB 银色
                  移动联通电信4G手机
                </a>
              </div>
              <p class="price">定金：¥100.00</p>
            </div>
          </li>
          <li class="lis">
            <p class="pho">
              <img src="" />
            </p>
            <div>
              <div class="title">
                <a href="#">
                  【官网价直降1100】Apple iPhone 8 Plus 256GB 银色
                  移动联通电信4G手机
                </a>
              </div>
              <p class="price">定金：¥100.00</p>
            </div>
          </li>
          <li class="lis">
            <p class="pho">
              <img src="" />
            </p>
            <div>
              <div class="title">
                <a href="#">
                  【官网价直降1100】Apple iPhone 8 Plus 256GB 银色
                  移动联通电信4G手机
                </a>
              </div>
              <p class="price">定金：¥100.00</p>
            </div>
          </li>
          <li class="lis">
            <p class="pho">
              <img src="" />
            </p>
            <div>
              <div class="title">
                <a href="#">
                  【官网价直降1100】Apple iPhone 8 Plus 256GB 银色
                  移动联通电信4G手机
                </a>
              </div>
              <p class="price">定金：¥100.00</p>
            </div>
          </li>
          <li class="lis">
            <p class="pho">
              <img src="" />
            </p>
            <div>
              <div class="title">
                <a href="#">
                  【官网价直降1100】Apple iPhone 8 Plus 256GB 银色
                  移动联通电信4G手机
                </a>
              </div>
              <p class="price">定金：¥100.00</p>
            </div>
          </li>
          <li class="lis">
            <p class="pho">
              <img src="" />
            </p>
            <div>
              <div class="title">
                <a href="#">
                  【官网价直降1100】Apple iPhone 8 Plus 256GB 银色
                  移动联通电信4G手机
                </a>
              </div>
              <p class="price">定金：¥100.00</p>
            </div>
          </li>
          <li class="lis">
            <p class="pho">
              <img src="" />
            </p>
            <div>
              <div class="title">
                <a href="#">
                  【官网价直降1100】Apple iPhone 8 Plus 256GB 银色
                  移动联通电信4G手机
                </a>
              </div>
              <p class="price">定金：¥100.00</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Rank",
};
</script>

<style lang="less" scoped>
.rank {
  width: 1200px;
  margin: 10px auto;
}
.rank-tab {
  width: 312px;
  margin: 15px auto;
  display: flex;
  a {
    display: block;
    padding: 0 18px;
  }
  i {
    display: block;
    width: 35px;
    height: 35px;
    margin: 0 auto;
  }
  p {
    line-height: 28px;
    padding: 0 5px;
  }
}
.rank-contant {
  ul {
    display: flex;
    flex-wrap: wrap;
  }
}
.lis {
  box-sizing: border-box;
  width: 267px;
  height: 328px;
  border: 1px solid red;
  padding: 10px;
  margin: 10px;
}
.pho {
  width: 230px;
  height: 210px;
  margin: 5px auto;
  border: 1px solid red;
}
.title {
  border: 1px solid red;
  margin: 10px 0;
  padding: 3px;
  height: 50px;
  line-height: 25px;
  text-align: center;
}
.price {
  color: #e1251b;
  text-align: center;
  font-size: 20px;
}
</style>
