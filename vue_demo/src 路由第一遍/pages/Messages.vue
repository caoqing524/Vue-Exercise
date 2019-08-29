<template>
<div>
  <ul>
    <!-- 遍历每个message -->
    <li v-for="(m,index) in messages" :key="index">
      <!-- 每个对应的title的message也有个对应的路由组件 -->
      <!-- router-link 声明式路由 -->
      <router-link :to="`/home/messages/detail/${m.id}`">{{m.title}}</router-link>
      <!-- 编程式路由 -->
      ----<button @click="pushClick(m.id)">push查看</button>
      ----<button @click="replaceClick(m.id)">replace查看</button>
    </li>
  </ul>
  <button @click="$router.back()">返回</button>
  <!-- 将匹配到的路由组件对应的内容渲染出来 -->
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [] // 空数组
    };
  },
  // 页面挂载完毕
  mounted() {
    setTimeout(() => {
      this.messages = [
        { id: 1, title: "message001" },
        { id: 3, title: "message003" },
        { id: 5, title: "message005" }
      ];
    }, 1000);
  },

  methods: {
    pushClick(a){
     this.$router.push(`/home/messages/detail/${a}`)
    },
    replaceClick(id){
  this.$router.replace(`/home/messages/detail/${id}`)
    }
  },
};
</script>

<style scoped>
</style>