<template>
    <div class="container">
      <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" v-model="searchName"/>
          <button @click="search">Search</button>
        </div>
      </section>
     
    </div>
</template>

<script>
export default {
    data() {
      return {
        searchName:''
      }
    },
    methods: {
   search(){
// 获取到输入框的内容
      const searchName = this.searchName.trim();
      // 判断输入框有输入内容时再分发
      if (searchName) {
        // 事件总线分发事件
        //this.$bus.$emit("searchClick", searchName);
        this.$store.dispatch('search',searchName)
        // 搜素完清空输入框
       this.searchName= ''
      }
   }
      
      
    },
};
</script>

<style scoped >

</style>
