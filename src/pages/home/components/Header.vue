<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        <span>{{city}}</span>
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
  // TODO:style中通过alias引入文件时需要加~
  @import '~@/assets/styles/variables.styl'
  .header
    display flex
    height $headerHeight
    line-height $headerHeight
    background $bgColor
    color #fff
    .header-left
      width .64rem
      float left
      text-align center
      font-size .4rem
    .header-input
      flex 1
      color #ccc
      height .64rem
      line-height .64rem
      margin-top .12rem
      margin-left .2rem
      padding-left .2rem
      background #fff
      border-radius .1rem
    .header-right
      width 1.24rem
      float right
      text-align center
      // 处理两个内联元素之间的空格问题
      font-size 0px
      color #fff
      span
        font-size .28rem
      .arrow-icon
        font-size .24rem
        margin-left .04rem
</style>
