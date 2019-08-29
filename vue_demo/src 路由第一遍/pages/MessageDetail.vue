<template>
  <div>
    <ul>
      <li>id:{{$route.params.id}}</li>
      <li>title:{{detail.title}}</li>
      <li>content:{{detail.content}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
      messageDetail: [
        { id: 1, title: "message001", content: "message content001" },
        { id: 3, title: "message003", content: "message content003" },
        { id: 5, title: "message005", content: "message content005" }
      ],
      // detail挂载到组件对象上 可公用
      detail:{}
    }
  },
    // 页面挂载完毕
    mounted() {

    this.showDetail()
   },
    // 实时监测id的变化
    watch:{
    $route(){
      this. showDetail()
    }
    },
    // 封装共有的函数
    methods: {
      showDetail(){
       const id=this.$route.params.id*1 
       this.detail=this.messageDetail.find(m=>m.id===id)
      }
    },
    
  
}
</script>

<style scoped>
</style>