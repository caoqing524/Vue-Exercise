<template>
  <div> 
    <ul>
      <li v-for="(n,index) in news" :key='index'>{{n.title}}</li>
      <!-- <li>news01</li>
      <li>news02</li>
      <li>news03</li>-->
    </ul>
 </div> 
</template>

<script>
export default {
  data() {
    return {
      news:[]
    
    }
  },
//页面挂载完毕  也可以直接在data中写
  mounted() {
    this.news=[
      {id:1,title:'news001'},
      {id:2,title:'news002'},
      {id:3,title:'news003'},
    ]
  },
};
</script>

<style scoped>
</style>