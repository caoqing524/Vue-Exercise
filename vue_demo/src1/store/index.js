// 引入vue vuex
import Vue from 'vue'
import Vuex from 'vuex';
// 引入各种对象
import state from './state.js'
import mutations from './mutations'
import actions from './actions.js'
import getters from './getters.js'

 //声明使用
 Vue.use(Vuex)

 // 暴露仓库对象
 export default new Vuex.Store({
   state,
   mutations,
   actions,
   getters
 })

