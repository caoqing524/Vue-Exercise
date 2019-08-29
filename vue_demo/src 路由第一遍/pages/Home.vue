<template>
  <div>
     <h1>Home</h1>
     <ul>
       <li>
         <!-- 使用路由组件 -->
         <router-link class="router-link-exact-active" to="/home/news">News</router-link>
       </li>
       <li>
         <router-link class="router-link-exact-active" to="/home/Messages">Messages</router-link>
       </li>
     </ul>
     <!-- 将匹配到的路由组件对应的内容渲染出来 -->
     <router-view></router-view>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>