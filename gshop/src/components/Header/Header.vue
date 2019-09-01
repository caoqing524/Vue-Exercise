<template>
  <!--首页头部组件，单独抽取出来，因为外卖，订单，搜索，我的，这四个组件都用到Header-->
  <header class="header">
    <!-- 插槽 slot组件可以占位，等界面渲染完毕，就被真正得标签替换-->
    <slot name="left" />
    <span class="header_title">
      <span class="header_title_text ellipsis">{{title}}</span>
    </span>
    <!-- 插槽 -->
    <slot name="right" />
  </header>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped >
.header
  background-color #02a774
  position fixed
  z-index 100
  left 0
  top 0
  width 100%
  height 45px
  .header_search
    position absolute
    left 15px
    top 50%
    transform translateY(-50%)
    width 10%
    height 50%
    .icon-sousuo
      font-size 25px
      color #fff
  .header_title
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
    width 50%
    color #fff
    text-align center
    .header_title_text
      font-size 20px
      color #fff
      display block
  .header_login
    font-size 14px
    color #fff
    position absolute
    right 15px
    top 50%
    transform translateY(-50%)
    .header_login_text
      color #fff
</style>
