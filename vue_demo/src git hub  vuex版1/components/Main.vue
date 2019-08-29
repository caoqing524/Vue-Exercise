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
//import axios from 'axios';
//引入vuex中的辅助函数
import {mapState} from 'vuex'
export default {

  
 computed: {
    ...mapState(['firstView','loading','errorMsg','users'])
  },
 
  
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
