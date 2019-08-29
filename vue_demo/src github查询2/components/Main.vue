<template>
  <div class="row">
    <h2 v-if="firstView">输入框输入内容后搜素</h2>
    <h2 v-else-if="loading">loading...</h2>
    <h2 v-else-if="errorMsg">请求错误：{{errorMsg}}</h2>
    <!-- 遍历card的每个用户数据 -->
    <div class="card" v-else v-for='(user,index) in users' :key="index">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{user.login}}</p>
    </div>
  </div>
</template>

<script>
// 引入axios

import axios from 'axios';
export default {
  data() {
    return {
      firstView: true,
      loading: false,
      errorMsg:'',
      users: []
    };
  },
  // 页面挂载完毕
  mounted() {
    // 绑定事件
    this.$bus.$on("searchClick",async searchName => {
      // 发请求的url
      const url = `https://api.github.com/search/users`;
      // 发请求前更新data的数据状态
      this.firstView=false
      this.loading=true
      try{ // 发送请求
    const result = await axios.get(url,{params:{q:searchName}})
   // 发完请求获取数据 并且遍历用户数据
   const users=result.data.items.map(item=>({
     login:item.login,
     avatar_url: item.avatar_url,
     html_url: item.html_url
   }))
   // 发完请求后再次更新data的数据状态
   this.loading=false
   this.users=users
    }catch(error){
      // 请求错误时更新data的数据状态
        this.loading = false
        this.errorMsg = error.message;
      }
   
    });
  }
};
</script>

<style scoped >
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
