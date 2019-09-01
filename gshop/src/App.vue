<template>
  <div>
    <!-- 使用底部导航组件 -->
    <FooterGuide v-show="$route.meta.isShowFooter"/>
    <!-- 将匹配到的路由组件的内容渲染出来 -->
    <router-view></router-view>
  </div>
</template>

<script>
// 引入底部导航组件
import FooterGuide from "./components/FooterGuide/FooterGuide.vue"
// 引入发送请求的函数
import {reqAddress} from './api/index.js'
export default {
  name: "App",
  // 注册底部导航组件
  components: {
    FooterGuide
  },
  // 测试接口
 async mounted() {
    const result= await reqAddress("116.36867","40.10038")
    console.log(result);
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped ></style>
