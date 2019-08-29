<template>
  <div class="todo-header">
    <!-- 输入框输入内容，点击回车后调用添加的方法 -->
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add"/>
  </div>
</template>
<script>
export default {
  // addClick方法通过自定义事件通信，因此此处不用props接收了
  // props: {
  //   // 接收父组件传来的添加方法
  //   addClick: {
  //     type: Function,
  //     require: true // 必须的
  //   }
  // },

  data(){
    return{
      // 输入框输入的title初始为空     
      title: ''
    }
  },
  methods: {
    add () {
       const title=this.title.trim()
       if (title) {
       const todo={
         id: Date.now(),
         title: title,
         isShow: false
       }
      // 调用父组件传来的添加方法
      // this.addClick(todo) 
      // 自定义事件通信  vm.$emit（） 分发事件 
      this.$emit('addClick',todo)
       // 添加完后清空
       this.title = ''
       }
    }

  }
};
</script>
<style scoped>
  /*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>