<template>
    <div class="container">
      <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
          <!-- v-model双向数据绑定一般用在输入框中 -->
          <input type="text" placeholder="enter the name you search" v-model="searchContent"/>
          <button @click="searchClick">Search</button>
        </div>
      </section>
     
    </div>
</template>

<script>
export default {
    data() {
        return {
          // 初始化输入框得搜素内容
      searchContent: ''
        };
    },
    methods: {
   searchClick(){
// 获取到输入框的内容
      const searchContent = this.searchContent.trim();
      // 判断输入框有输入内容时再分发
      if (searchContent) {
        // 事件总线分发事件
        // this.$bus.$emit("searchClick", searchContent);
        
        // 使用dispatch分发向actions进行提交，从而修改数据状态
        this.$store.dispatch('searchClick',searchContent)
        // 搜素完清空输入框
       this.searchContent= ''
      }
   }
      
      
    },
};
</script>

<style scoped >

</style>
