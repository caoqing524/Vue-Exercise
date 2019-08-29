<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- 使用组件 -->
      <!-- 自定义事件通信（父传子） -->
      <TodoHeader @addClick="addClick" />
      <!-- 强制数据绑定传给子组件 子组件通过props接收  props通信（父传子） -->
      <!-- <TodoList :todos='todos' :delClick="delClick" :toggleTodo="toggleTodo"/> -->

      <!-- 通过消息订阅发布实现组件通信 删除todo-->
      <!-- <TodoList :todos='todos' :toggleTodo="toggleTodo"/> -->
      <!-- 事件总线的方式实现组件通信 切换是否选中 -->
      <TodoList :todos="todos" />
      <!-- 自定义事件通信（父传子） -->
      <TodoFooter :todos="todos" @checkAll="checkAll" />
    </div>
  </div>
</template>
<script>
// 引入组件
import TodoHeader from "./components/TodoHeader.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";
// 通过消息订阅发布实现删除todo的功能 先引入
import PubSub from "pubsub-js";
export default {
  // 页面加载完毕
  mounted() {
    // 订阅消息  参数1 事件名  参数2 回调函数
    PubSub.subscribe("delClick", (msg, index) => {
      this.delClick(index);
    });
    // 事件总线通信的绑定事件
    this.$bus.$on =
      ("toggleTodo",
      () => {
        this.toggleTodo(todo);
      });
  },
  // 注册组件  局部注册组件components有s
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  },
  data() {
    // 子组件都需要用到的数据定义在父组件中，再传给子组件
    return {
      todos: [
        { id: 1, title: "巴塞罗那", isShow: false },
        { id: 2, title: "赫尔辛基", isShow: true },
        { id: 3, title: "伊斯坦布尔", isShow: false },
        { id: 4, title: "约翰内斯堡", isShow: false }
      ]
    };
  },
  methods: {
    // 在父组件中定义点击删除的方法，通过List组件传给Item组件，Item组件中调用
    delClick(index) {
      this.todos.splice(index, 1);
    },
    //  在父组件中定义点击添加的方法，通过Header组件调用
    addClick(todo) {
      this.todos.unshift(todo);
    },
    // 在父组件中定义切换Item的选中状态的方法
    toggleTodo(todo) {
      todo.isShow = !todo.isShow;
    },
    // 在父组件中定义是否全选的操作
    checkAll(isCheck) {
      // 遍历数组todos
      // isCheck传的是true或false决定isShow的值
      this.todos.forEach(todo => {
        todo.isShow = isCheck;
      });
    }
  }
};
</script>
<style scoped>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>