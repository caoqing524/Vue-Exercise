<template>
  <div>
    <h1>Home</h1>
    <ul>
      <!-- 使用已经注册成路由组件的路由 router-link -->
      <li><router-link to='/home/news'>News</router-link></li>
      <li><router-link to="/home/messages">Messages</router-link></li>
    </ul>
  <!-- 将匹配到的路由组件对应的内容渲染出来 -->
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped >
</style>
