// 存储多个直接修改状态数据的方法的对象
// 引入为mutation中函数(方法)定义好的常量 文件
import {
  REQUEST,
  REQUEST_SUCCESS,
  REQUEST_ERROR
} from './mutation-type.js'

// 暴露该对象
export default {
  // 发请求前修改状态数据的方法  方法名用定义好的常量
  [REQUEST](state) {
    //直接修改状态数据
    state.firstView = false
    state.loading = true
  },
  // 发请求成功修改状态数据的方法
  [REQUEST_SUCCESS](state, users) {
    state.loading = false
    state.users = users
  },
  // 请求失败修改状态数据的方法 
  [REQUEST_ERROR](state, error) {
    state.loading = false
    state.errorMsg = error
  }

}
