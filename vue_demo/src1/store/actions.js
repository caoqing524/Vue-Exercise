// 引入axios
import axios from 'axios'
// 引入mutations对应的常量名的文件
import {
  REQUEST,
  RE_SUCCESS,
  RE_ERROR
} from './mutations-type.js';
export default {
// 异步操作获取完搜素内容后再发请求
  async search({commit}, searchName) {
    // 发请求的url
    const url = `https://api.github.com/search/users`;
    // 发请求前更新data的数据状态
    commit(REQUEST)
    try { // 发送请求
      const result = await axios.get(url, {
        params: {
          q: searchName
        }
      })
      // 发完请求获取数据 并且遍历用户数据
      const users = result.data.items.map(item => ({
        login: item.login,
        avatar_url: item.avatar_url,
        html_url: item.html_url
      }))
      // 发完请求后再次更新data的数据状态
      commit(RE_SUCCESS, users)
    } catch (error) {
      // 请求错误时更新data的数据状态
      commit(RE_ERROR)
    }

  }

}
