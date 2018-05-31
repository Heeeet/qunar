<template>
  <div class="list" ref="wrapper">
    <div>
      <div>
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div>
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="wrapper">
            <div class="button">北京</div>
          </div>
          <div class="wrapper">
            <div class="button">北京</div>
          </div>
          <div class="wrapper">
            <div class="button">北京</div>
          </div>
          <div class="wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div>
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>

        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>

        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>

        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  .border-topbottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .border-bottom
    &:before
      border-color #ccc
  // .border-topbottom::before
  // .border-topbottom::after
  //   border-color #ccc
  .list
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    overflow hidden
    .title
      width 100%
      height .54rem
      line-height .44rem
      padding-left .2rem
      background #eee
      color #666
      font-size .26rem
    .button-list
      // 没有这一行会发生塌陷,因为子元素有float
      overflow hidden
      padding .1rem .6rem .1rem .1rem
      .wrapper
        width 33.33%
        float left
        .button
          padding .1rem 0
          margin .1rem
          text-align center
          border .02rem solid #ccc
          border-radius .06rem
    .item-list
      .item
        height .76rem
        line-height .76rem
        padding-left .2rem
</style>
