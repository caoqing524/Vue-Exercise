// 引入mutations对应的常量名的文件
import {REQUEST,RE_SUCCESS,RE_ERROR} from './mutations-type.js';
// 包含了多个直接修改状态数据的方法的对象
export default{
// 发请求前更新数据状态的方法
[REQUEST](state){
  state.firstView = false
  state.loading = true
},
// 发请求成功后更新数据状态的方法
[RE_SUCCESS](state,users){
state.loading = false
state.users = users
},

// 请求失败后更新数据状态的方法
[RE_ERROR](state,error){
state.loading = false
state.errorMsg = error
}

}