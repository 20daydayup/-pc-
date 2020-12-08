import Vue from "vue";
import {
  Button,
  Carousel,
  CarouselItem,
  Pagination,
  Input,
  InputNumber,
  Message,
  MessageBox,
} from "element-ui";

Vue.use(Button);
Vue.use(Carousel); //轮播图
Vue.use(CarouselItem); //轮播图
Vue.use(Pagination);
Vue.use(Input);
Vue.use(InputNumber);

Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;
