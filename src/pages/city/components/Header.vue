<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont back-arrow">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/variables.styl'
  .header
    height $headerHeight
    line-height $headerHeight
    overflow hidden
    text-align center
    color #ffffff
    background $bgColor
    font-size .32rem
    position relative
    .back-arrow
      position absolute
      top 0
      left 0
      width .64rem
      font-size .4rem
</style>
