// 引入和声明使用
import Vue from 'vue';
import Vuex from 'vuex';
 // 声明使用
 Vue.use(Vuex)

// 包含多个状态数据的对象
 const state={
   count:0
 }
 // 包含多个直接修改状态数据的多个方法的对象 一般是同步操作
 const mutations={
  // 直接修改状态数据state的方法
   INCREMENT(state) {
      state.count++
   },

   DECREMENT(state){
     state.count--
   }
 }


 // 包含多个间接修改状态数据的多个方法的对象，一般是异步操作

 const actions={
 
  // 间接修改状态数据state的方法
  // 用系统提供的context对象commit提交一个mutaction
// 加
  increment(context){
context.commit(INCREMENT)
},
// 减
// commit=context.commit 解构赋值 {commit}=context
  decrement({commit}) {
  commit(DECREMENT)

  },
  // 奇数加
  oddIncrement({state,commit}){
    if(state.count%2!==0){
     commit(INCREMENT)
    }
  },
  // 异步加
  asyncIncrement({commit}) {
    setTimeout(() => {
     commit(INCREMENT)
    }, 1000);
  }
 }
 // 包含多个状态数据的计算属性的getter方法的对象
 const getters={
   // 检测奇数偶数变化
   eventOrOdd(state) {
     return state.count % 2 === 0 ? '偶数' : '奇数'
   }
 }
 // 暴露 Store仓库对象
 export default new Vuex.Store({
   state,
   mutations,
   actions,  
   getters
 })