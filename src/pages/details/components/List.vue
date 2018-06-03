<template>
  <div>
    <div class="item"
         v-for="(item, index) of list"
         :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <!-- 递归组件-->
      <div v-if="item.children" class="item-children">
        <details-list :list="item.children"></details-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailsList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .item-title
    height .8rem
    line-height .8rem
    font-size .32rem
    padding 0 .2rem
    position relative
    text-indent .4rem
    .item-title-icon
      display inline-block
      position absolute
      top .2rem
      left .2rem
      width .36rem
      height .36rem
      background url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
      margin-right .1rem
      background-size .4rem 3rem
  .item-children
    padding 0 .2rem
</style>
