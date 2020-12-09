import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

/* import Home from "../views/Home";
import Login from "../views/Login";
import Register from "../views/Register";
import Search from "../views/Search";
import Detail from "../views/Detail";
import ShopCart from "../views/ShopCart";
import AddCartSuccess from "../views/AddCartSuccess";
import Center from "../views/Center";
import Pay from "../views/Pay";
import PaySuccess from "../views/PaySuccess";
import Trade from "../views/Trade"; */

import store from "@store/";

const Home = () => import(/* webpackChunkName: "Home" */ "../views/Home");
const Login = () => import(/* webpackChunkName: "Login" */ "../views/Login");
const Register = () =>import(/* webpackChunkName: "Register" */ "../views/Register");
const Search = () => import(/* webpackChunkName: "Search" */ "../views/Search");
const Detail = () => import(/* webpackChunkName: "Detail" */ "../views/Detail");
const AddCartSuccess = () =>
  import(/* webpackChunkName: "AddCartSuccess" */ "../views/AddCartSuccess");
const ShopCart = () =>
  import(/* webpackChunkName: "ShopCart" */ "../views/ShopCart");
const Trade = () => import(/* webpackChunkName: "Trade" */ "../views/Trade");
const Pay = () => import(/* webpackChunkName: "Pay" */ "../views/Pay");
const PaySuccess = () =>
  import(/* webpackChunkName: "PaySuccess" */ "../views/PaySuccess");
const Center = () => import(/* webpackChunkName: "Center" */ "../views/Center");

// 重写push和replace方法
// 目的：为了让编程式导航重复点击时不报错~
const push = VueRouter.prototype.push;
const replace = VueRouter.prototype.replace;

VueRouter.prototype.push = function(location, onComplete, onAbot) {
  // 如果用户想处理失败，就处理  如果不处理失败，给默认值：空函数
  if (onComplete && onAbot) {
    return push.call(this, location, onComplete, onAbot);
  }
  return push.call(this, location, onComplete, () => {});
};

VueRouter.prototype.replace = function(location, onComplete, onAbot) {
  // 如果用户想处理失败，就处理  如果不处理失败，给默认值：空函数
  if (onComplete && onAbot) {
    return replace.call(this, location, onComplete, onAbot);
  }
  return replace.call(this, location, onComplete, () => {});
};

//安装插件
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    // 路由配置
    {
      path: "/",
      component: Home,
    },
    {
      path: "/login",
      component: Login,
      // 当组件加载显示时，meta中的参数会传到$route中
      // 当组件不加载显示时，meta中的参数不会传
      meta: {
        isFooterShow: true,
      },
    },
    {
      path: "/register",
      component: Register,
      meta: {
        isFooterShow: true,
      },
    },
    {
      // ?: 代表 params 参数是可选的
      name: "search",
      path: "/search/:searchText?",
      component: Search,
    },
    {
      name: "detail",
      path: "/detail/:id",
      component: Detail,
    },
    {
      name: "shopcart",
      path: "/shopcart",
      component: ShopCart,
    },
    {
      name: "addcartsuccess",
      path: "/addcartsuccess",
      component: AddCartSuccess,
    },
    {
      name: "trade",
      path: "/trade",
      component: Trade,
    },
    {
      name: "pay",
      path: "/pay",
      component: Pay,
    },
    {
      name: "paysuccess",
      path: "/paysuccess",
      component: PaySuccess,
      // 路由独享守卫
      // 路由独享守卫
      // beforeEnter: (to, from, next) => {
      // 	// 需求：只有添加了购物车才能进行，没有添加就去购物车页面
      // 	// console.log(to, from, next);
      // 	// 1. 从detail过来 2. 有数据
      // 	if (from.name === "detail" && sessionStorage.getItem("cart")) {
      // 		return next();
      // 	}
      // 	next("/shopcart");
      // },
    },
    {
      name: "center",
      path: "/center",
      component: Center,
    },
  ],
  // 每次切换路由页面滚动条位置
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

/*
		to   要去的路由对象($route)
		from 从哪来的路由对象（当前路由对象）($route)
		next 是一个函数：跳转到哪个路由的方法
			比如：要去to这个路由 next()	
						要去登录路由 next('/login')  next({path: '/login'})  next({name: 'login'})
	
		权限验证：
			如果用户未登录，不允许去 trade pay center 等路由
	*/

// 需要进行权限验证的地址
const permissionPaths = ["/trade", "/pay", "/center"];
// 路由全局前置守卫
router.beforeEach((to, from, next) => {
  if (permissionPaths.indexOf(to.path) > -1 && !store.state.user.token) {
    return next("/login");
  }
  next();
});

export default router;
