<template>
  <div>
    <MainNav />
    <!-- 商品detail -->
    <section class="detail">
      <!-- 面包屑 -->
      <div class="Breadcrumb">
        <span>{{ categoryView.category1Name }} /</span
        ><span>{{ categoryView.category2Name }} /</span
        ><span>{{ categoryView.category3Name }}</span>
      </div>
      <!-- 主要区域 -->
      <div class="maincon">
        <!-- 左侧放大镜区域 -->
        <div class="preview-Warp">
          <!-- 放大镜 -->
          <Zoom
            :urlImg="
              skuInfo.skuImageList[currentImgIndex] &&
              skuInfo.skuImageList[currentImgIndex].imgUrl
            "
          />

          <!-- 轮播图-->
          <ImageList
            :skuImageList="skuInfo.skuImageList"
            :updataCurrentImgIndex="updataCurrentImgIndex"
          />
        </div>
        <!-- 选择区域 -->
        <div class="info-warp">
          <div class="produce-detail">
            <div class="goods-detail">
              <h2>{{ skuInfo.skuName }}</h2>
              <p>{{ skuInfo.skuDesc }}</p>
              <div class="price-area">
                <div class="price-area-one">
                  <div>价 格</div>
                  <div class="price">
                    <i>¥</i>
                    <em>3500</em>
                    <span>降价通知</span>
                  </div>
                  <div>累计评价65545</div>
                </div>
                <div class="price-area-one">
                  <div>促 销</div>
                  <div>
                    <i>加价购</i>
                    <em
                      >满999.00另加20.00元，或满1999.00另加30.00元，或满2999.00另加40.00元，即可在购物车换购热销商品</em
                    >
                  </div>
                </div>
              </div>
              <div class="supportArea">
                <div class="support">
                  <div class="title">支 持</div>
                  <div class="con">
                    以旧换新，闲置手机回收 4G套餐超值抢 礼品购
                  </div>
                </div>
                <div class="send">
                  <div class="title">配 送 至</div>
                  <div class="con">广东省 深圳市 宝安区</div>
                </div>
              </div>
            </div>
            <div class="choose-area">
              <div class="choosed"></div>
              <dl v-for="spuSaleAttr in spuSaleAttrList" :key="spuSaleAttr.id">
                <dt>{{ spuSaleAttr.saleAttrName }}</dt>
                <dd
                  v-for="spuSaleAttrValue in spuSaleAttr.spuSaleAttrValueList"
                  :key="spuSaleAttrValue.id"
                  :class="{ active: isChoose }"
                  @click="choose"
                >
                  {{ spuSaleAttrValue.saleAttrValueName }}
                </dd>
              </dl>
            </div>
            <div class="shop-car-area">
              <div class="controls">
                <el-input-number
                  class="input-number"
                  v-model="skuNum"
                  controls-position="right"
                  :min="1"
                  :max="100"
                ></el-input-number>
              </div>
              <div class="shop-car">
                <el-button type="danger" @click="addCart">
                  <a href="javascript:">加入购物车</a>
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import MainNav from "@comps/MainNav";
import ImageList from "./ImageList";
import Zoom from "./Zoom";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Detail",
  data() {
    return {
      currentImgIndex: 0,
      isChoose: false, //商品属性标签
      skuNum: 1,
    };
  },
  computed: {
    ...mapGetters(["categoryView", "spuSaleAttrList", "skuInfo"]),
  },
  methods: {
    ...mapActions(["getProducDetail"]),
    //使用轮播图组件的index 传给放大镜
    updataCurrentImgIndex(index) {
      this.currentImgIndex = index;
    },
    choose() {
      this.isChoose = !this.isChoose;
    },
    //加入购物车
    async addCart() {
      // 发送请求，加入购物车
      // actions函数必须返回一个promise对象，才会等待它执行
      try {
        await this.updateCartCount({
          skuId: this.skuInfo.id,
          skuNum: this.skuNum,
        });
        // 一旦加入购物车，跳转到加入购物车成功页面
        this.$router.push(`/addcartsuccess?skuNum=${this.skuNum}`);
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    this.getProducDetail(this.$route.params.id); //id传出去
  },
  components: {
    MainNav,
    ImageList,
    Zoom,
  },
};
</script>

<style lang="less" scoped>
.detail {
  width: 1200px;
  margin: 15px auto 0;
  border: 1px solid green;
}
.Breadcrumb {
  margin: 10px 3px;
  padding: 5px 6px;
  span {
    margin: 0px 5px;
  }
}
.maincon {
  display: flex;
  justify-content: space-between;
}
// 左侧
.preview-Warp {
  width: 400px;
}
// 右侧
.info-warp {
  width: 700px;
  border: 1px solid #ccc;
}
.goods-detail {
  div {
    margin-top: 10px;
  }
  h2 {
    margin-top: 10px;
  }
  p {
    margin: 10px;
  }
}
.price-area {
  margin: 13px 0;
  padding: 7px;
  background-color: #fee9eb;

  .price-area-one {
    display: flex;
    height: 28px;
    line-height: 28px;
  }
}
.price {
}
.supportArea {
  border-bottom: 1px solid #ededed;
  padding-bottom: 5px;
}
.support {
  display: flex;
}
.send {
  display: flex;
}
.choose-area {
  margin-top: 10px;
  line-height: 28px;
  dl {
    margin: 13px 0;
    display: flex;
  }
  dt {
    margin-right: 5px;
  }
  dd {
    color: #666;
    border: 1px solid #bbb;
    padding: 0 8px;
    margin-right: 5px;
    &.active {
      color: green;
      border: 1px solid green;
    }
  }
}
.choosed {
}
.shop-car-area {
  display: flex;
}
.controls {
  position: relative;
  margin-right: 30px;
  box-sizing: border-box;
  input {
    width: 60px;
    height: 40px;
  }
  // .add {
  //   position: absolute;
  //   top: 0px;
  //   left: 64px;
  //   height: 20px;
  //   width: 18px;
  //   vertical-align: center;
  //   border: 1px solid #ccc;
  // }
  // .clum {
  //   position: absolute;
  //   top: 20px;
  //   left: 65;
  //   border: 1px solid #ccc;
  //   height: 20px;
  //   width: 18px;
  // }
}
</style>
