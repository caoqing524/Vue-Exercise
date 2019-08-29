<template>
  <div>
    <h1>次数:{{$store.state.count}},奇数or偶数：{{$store.getters.eventOrOdd}}</h1>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="oddIncrement">奇数+</button>
    <button @click="asyncIncrement">异步+</button>
  </div>
</template>

<script>

export default {
  // 页面挂载完毕打印下this 是个VueComponent对象，里面有很多实例方法 属性 
  //包括$store ,$store里有commit等方法
  mounted() {
  console.log(this);
},
  // data(){
  //   return{
  //     count:0
  //   }
  // },
  methods: {

    increment(){
       //this.count++
       // App里调用仓库store里的方法
       this.$store.commit('INCREMENT')
    },
    decrement(){
     //this.count--
     this.$store.commit('DECREMENT')
    },
  oddIncrement(){
   if(this.count%2!==0){
      //  this.count++
      this.$store.dispatch('oddIncrement')
     }
  },

  asyncIncrement(){
     setTimeout(() => {
       //this.increment()
       this.$store.dispatch('asyncIncrement')

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