<template>
  <div class="todo-footer">
    <label>
      <!-- v-model双向数据绑定 -->
      <input type="checkbox" v-model="isChecked" />
    </label>
    <span>
      <!-- 已完成的数量用计算属性做 -->
      <span>已完成{{count}}</span>
      / 全部{{todos.length}}
    </span>
    <button class="btn btn-danger" v-show="count>0">清除已完成任务</button>
  </div>
</template>
<script>
export default {
  props: {
    todos: Array,
    // checkAll: Function
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
        // this.checkAll(value);
        // 自定义事件通信  vm.$emit（） 分发事件 
       this.$emit('checkAll',value)
      }
    }
  }
};
</script>
<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>