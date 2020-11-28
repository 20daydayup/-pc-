<template>
  <div class="main">
    <Header></Header>
    <router-view></router-view>
    <Footer v-if="!$route.meta.isFooterShow"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
</style>