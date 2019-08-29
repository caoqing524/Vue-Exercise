<template>
  <div class='container'>
     <!-- 使用组件 -->
     <Search/>
     <List/>
  </div>
</template>

<script>
// 引入组件
import Search from './components/Search.vue'
import List from './components/List.vue'
  export default {
    // 注册组件
    components:{
      Search,
      List
    }
  }
</script>

<style scoped>

</style>