<template>
     <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
          <h2>Router Basic - 01</h2>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 使用路由组件
            router-link中写入已经注册好的路由组件会被渲染成a标签 -->
          <router-link to="/about" class="list-group-item router-link-exact-active">About</router-link>
          <router-link to="/home" class="list-group-item">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 将路由匹配到的组件对应的内容渲染出来 -->
              <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
};
</script>

<style scoped >

</style>
