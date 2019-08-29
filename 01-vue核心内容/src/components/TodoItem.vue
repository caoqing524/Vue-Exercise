<template>
  <li :style="{backgroundColor:bgColor,color:fontColor}" @mouseenter="mouseHandle(true)" @mouseleave="mouseHandle(false)">
    <label>
      <!--  isCompleted的值可能是true 可能是false
      isCompleted的值随着toggleTodo里的isShow的变化而变化，因此应放在计算属性里
      -->
      <input type="checkbox" v-model="isCompleted" />
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="state" @click="del">删除</button>
  </li>
</template>
<script>
export default {
  // 子组件接收父组件List传来的每条todo数据，目前props是对象的写法
  // 设置接收过来的todo的类型
  props: {
    todo: Object,
    delClick: Function,
    index: Number,
    toggleTodo: Function
  },

  data() {
    return {
      bgColor: "white",
      fontColor: "black",
      state:false
    }

  },
  methods: {
// 鼠标进入和出去时样式的方法
  mouseHandle(flag) {
    // 判断进入和出去
   if (flag) {
      this.bgColo = "green"
      this.fontColor = "blue"
      this.state=true
   } else {
       this.bgColor = "white"
       this.fontColor = "black"
       this.state=false
   }
  },

    // 在Item中的删除方法中调用父组件中的删除方法
    del() {
      if (confirm("确定删除吗？")) {
        this.delClick(this.index);
      }
    }
  },

  // 计算属性
  computed: {
    isCompleted: {
      get(){
        return this.todo.isShow
      },
      // set 监视todo的变化
     set(value){
       // 调用父组件传来的toggleTodo方法
      this.toggleTodo(this.todo)
     }
    }
  },
};
</script>
<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  /* display: none; */
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>