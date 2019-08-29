<template>
  <ul class="todo-main">
       <!-- 使用组件 -->
       <!-- 遍历todos里的数据 并把todos数组里的每条todo数据传给子组件Item-->
      <TodoItem v-for='(todo,index) in todos' :key='todo.id' :todo='todo' :index="index" />
      
      </ul>
      
</template>
<script>
// 引入组件
import TodoItem from './TodoItem.vue'
export default {
  // 子组件通过props来接收父组件传来的数据
  // props可以实现组件之间的传值,父级传子级组件的方式,目前props是数组的写法,
  props: ['todos','delClick','toggleTodo'],
  
  // 注册组件
  components: {
    TodoItem
  }
}
</script>
<style scoped>
  /*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>