<template>
  <div>
    <h1 v-if="!repUrl">正在加载...</h1>
    <h1 v-else>
      most start is
      <a :href="repUrl">{{repName}}</a>
    </h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      repUrl: "",
      repName: ""
    };
  },
  mounted() {
    // 发送请求
    const url = `https://api.github.com/search/repositories?q=v&sort=stars`;
    this.$http
      .get(url)
      .then(response => {
        // 获取数据
        const result = response.data.items[0];
        console.log(result);
        // 更新数据
        this.repUrl = result.html_url;
        this.repName = result.name;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
<style scoped>
</style>

 
