// 存储了多个间接修改状态数据的方法的对象(一般是异步操作)
// 暴露该对象
// 引入axios
import axios from 'axios'

// 引入为mutation中函数(方法)定义好的常量 文件
import {
  REQUEST,
  REQUEST_SUCCESS,
  REQUEST_ERROR
} from './mutation-type.js'

export default{
// 异步发送请求
// 使用commit向mutations提交 间接 修改状态数据
   async searchClick(context, searchContent) {
     
       // 发请求的url
       const url = `https://api.github.com/search/users`;
       // 发请求前更新data的数据状态
       context.commit(REQUEST)
       try { // 发送请求
         const result = await axios.get(url, {
           params: {
             q: searchContent
           }
         })
         // 发完请求获取数据 并且遍历用户数据
         const users = result.data.items.map(item => ({
           login: item.login,
           avatar_url: item.avatar_url,
           html_url: item.html_url
         }))
         // 发完请求后再次更新data的数据状态
          context.commit(REQUEST_SUCCESS,users)
       } catch (error) {
         // 请求错误时更新data的数据状态
         context.commit(REQUEST_ERROR)
       }

     }
   

}
