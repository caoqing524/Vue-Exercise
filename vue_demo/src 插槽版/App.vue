<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- 使用组件 -->
      <TodoHeader :addClick="addClick" />
      <!-- 强制数据绑定传给子组件 -->
      <TodoList :todos="todos" :delClick="delClick" :toggleTodo="toggleTodo" />
      <TodoFooter :todos="todos" :checkAll="checkAll">
       
          <label slot="left">
            <!-- v-model双向数据绑定 -->
            <input type="checkbox" v-model="isChecked" />
          </label>
          <span slot="center">
            <!-- 已完成的数量用计算属性做 -->
            <span>已完成{{count}}</span>
            / 全部{{todos.length}}
          </span>
          <button slot="right" class="btn btn-danger" v-show="count>0">清除已完成任务</button>
       
      </TodoFooter>
    </div>
  </div>
</template>
<script>
// 引入组件
import TodoHeader from "./components/TodoHeader.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";
export default {
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
  },
   // 计算属性
  computed: {
    // get操作
    count() {
      return this.todos.reduce((pre, todo) => pre + (todo.isShow ? 1 : 0), 0);
    },
    isChecked: {
      get() {
        return this.todos.length === this.count && this.count > 0
      },
      set(value) {
        //调用checkAll方法
        this.checkAll(value);
      }
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