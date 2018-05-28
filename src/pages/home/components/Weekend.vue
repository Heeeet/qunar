<template>
  <div>
    <div class="title">周末去哪玩</div>
    <ul>
      <!-- border-bottom: 引入一像素边框(border.css)-->
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl"
               :alt="item.title">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/mixins.styl'
  .title
    background #eee
    line-height .8rem
    /* 换一种方式*/
    padding-left .2rem
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 37.09%
    img
      width 100%
  .item-info
    padding .14rem .2rem .2rem .2rem
    .item-title
      line-height .48rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .42rem
      color #ccc
      ellipsis()

</style>
