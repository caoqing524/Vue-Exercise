// 配置路由

// 引入Vue
import Vue from 'vue'
//  引入路由
import VueRouter from 'vue-router'
// 引入注册好配置好的一些路由组件
import routes from './routes';
// 使用路由插件
Vue.use(VueRouter)
// 暴露
export default new VueRouter({
routes
})
