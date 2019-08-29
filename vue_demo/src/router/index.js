// 配置路由
// 引入vue
import Vue from 'vue'
//引入路由
import VueRouter from 'vue-router'
// 引入已经配置好的路由
import routes from './routes.js'
//使用路由
Vue.use(VueRouter)
// 暴露配置好的路由 注意 是暴露在VueRouter的实例里面
export default new VueRouter({
  routes
})