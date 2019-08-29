<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <!-- v-model双向数据绑定 -->
      <input type="text" placeholder="enter the name you search" v-model="searchName" />
      <button @click="searchClick">Search</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      searchName: ""
    };
  },

  methods: {
    // 在点击搜素的方法中分发事件
    searchClick() {
      // 获取到输入框的内容
      const searchName = this.searchName.trim();
      // 判断输入框有输入内容时再分发
      if (searchName) {
        // 事件总线分发事件
        this.$bus.$emit("searchClick", searchName);
        // 搜素完清空输入框
       this.searchName= ''
      }
    }
  }
};
</script>

<style scoped>
</style>
