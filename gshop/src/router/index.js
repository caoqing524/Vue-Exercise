// 引入vue
import Vue from 'vue'
// 引入路由
import VueRouter from 'vue-router'
// 引入配置好的路由文件
import routes from './routes.js'
// 声明使用
Vue.use(VueRouter)
// 暴露配置好的路由数组
export default new VueRouter({
 mode: 'history',
  routes
})