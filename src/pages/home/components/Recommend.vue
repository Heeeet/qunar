<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <!-- border-bottom: 引入一像素边框(border.css)-->
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl"
               :alt="item.title">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/mixins.styl'
  .title
    margin-top .1rem
    line-height .8rem
    background #eee
    text-indent .2rem
  .item
    display flex
    height 1.9rem
    overflow hidden
    .item-img-wrapper
      width 1.7rem
      height 1.7rem
      margin .1rem 0 0 .1rem
      img
        width 100%
    .item-info
      flex 1
      padding .1rem
      /* ?加了这一行之后ellipsis()才起作用*/
      min-width 0
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height .4rem
        color #ccc
        ellipsis()
      .item-button
        line-height .44rem
        margin-top .16rem
        background #ff9300
        padding 0 .1rem
        border-radius .06rem
        color #fff
</style>
