// 引入vue
import Vue from 'vue'
// 引入App
import App from './App'
// 引入配置好的路由
import router from './router/index.js'
Vue.config.productionTip = false
// 引入Header组件 并注册成一个全局组件
import Header from './components/Header/Header.vue'
// 注册Header为全局组件
Vue.component('Header', Header)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  // 注册路由器
  router
})
