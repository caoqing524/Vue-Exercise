<template>
  <div>
     <!-- 使用组件 -->
     <Search/>
     <Main/>
  </div>
</template>

<script>
// 引入组件
import Search from './components/Search.vue'
import Main from './components/Main.vue'
  export default {
    // 注册组件
    components:{
      Search,
      Main
    }
  }
</script>

<style scoped>

</style>