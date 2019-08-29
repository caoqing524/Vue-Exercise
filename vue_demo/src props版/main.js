// 引入vue
import Vue from 'vue'
// 引入App组件
import App from './App.vue'
// 关闭开启后的提示信息
Vue.config.productionTip = false
// 实例化vue对象

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 注册组件
  components: {
     App
  },
  // 模板
  template: '<App/>'
})






