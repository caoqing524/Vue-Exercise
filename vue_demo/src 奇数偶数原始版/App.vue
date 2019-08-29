<template>
  <div>
    <h1>次数:{{count}},奇数or偶数：{{eventOrOdd}}</h1>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="oddIncrement">奇数+</button>
    <button @click="asyncIncrement">异步+</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      count:0
    }
  },
  methods: {

    increment(){
       this.count++
    },
    decrement(){
     this.count--
    },
  oddIncrement(){
   if(this.count%2!==0){
       this.count++
     }
  },

  asyncIncrement(){
     setTimeout(() => {
       this.increment()
     }, 1000);
  }


  },
// 监视奇数偶数变化
computed: {
  eventOrOdd(){
    return this.count%2===0? '偶数':'奇数'
  }
},

};
</script>

<style scoped>
</style>