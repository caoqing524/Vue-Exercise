// 引入vue
import Vue from 'vue'
// 引入App组件
import App from './App.vue'
// 引入VueResource
import VueResource from 'vue-resource'

// 使用插件
Vue.use(VueResource)
// 关闭开启后的提示信息
Vue.config.productionTip = false
// 把Vue的实例对象挂到Vue原型的$bus属性上，便于Vue的各个组件直接用该实例对象的方法
Vue.prototype.$bus=new Vue()
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






