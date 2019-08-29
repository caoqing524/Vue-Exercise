<template>
  <div>
    <ul>
      <li v-for="(m,id) in messages" :key="m.id">
        <!-- 使用已经注册好的Mdetails路由组件 -->
        <router-link :to="`/home/messages/mdetails/${m.id}`">{{m.title}}</router-link>
        <!-- 编程式路由 -->
        <button @click='clickPush(m.id)'>push有历史纪录查看</button>
        <button @click='clickReplace(m.id)'>replace无历史纪录查看</button>
      </li>
    </ul>
    <button @click='$router.back()'>返回</button>
    <!-- 将匹配到的路由组件对应的内容渲染出来 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 初始化messages
      messages: []
    };
  },
  // 页面挂载完毕
  mounted() {
    setTimeout(() => {
      this.messages = [
        { id: 1, title: "ONE" },
        { id: 2, title: "TWO" },
        { id: 3, title: "THREE" }
      ];
    }, 1000);
  },
  methods: {
    
    // 编程式导航
    // 路由器对象里有push(),replace等方法  和当前路由对象$route不同，$route里有 params,query等
    clickPush(a){
      this.$router.push(`/home/messages/mdetails/${a}`)
    },
    clickReplace(a){
      this.$router.replace(`/home/messages/mdetails/${a}`)
    }
  },

};
</script>

<style scoped>
</style>