<template>
  <div>
    <ul>
      <li>id:{{$route.params.id}}</li>
      <li>title:{{mdetail.title}}</li>
      <li>content:{{mdetail.content}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mdetails: [
        { id: 1, title: "ONE", content: "weather" },
        { id: 2, title: "TWO", content: "study" },
        { id: 3, title: "THREE", content: "shopping" }
      ],
      // 把mdetail挂载到组件对象上可以公用
      mdetail: {}
    };
  },
  // 匹配Mdetails中的id
  mounted() {
    // 当前路由组件对象Mdetails的params中有id的值
    const id = this.$route.params.id * 1;
    // 判断当前Mdetails中的id与params中有id的值是否一致
    this.mdetail = this.mdetails.find(m => m.id === id);
  },
  //实时 检测Mdetails变化
  watch: {
    $route() {
      // 当前路由组件对象Mdetails的params中有id的值
      const id = this.$route.params.id * 1;
      // 判断当前Mdetails中的id与params中有id的值是否一致
      this.mdetail = this.mdetails.find(m => m.id === id);
    }
  }
};
</script>

<style scoped>
</style>