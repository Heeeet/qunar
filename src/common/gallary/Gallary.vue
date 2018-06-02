<template>
  <div class="container" @click="handleClick">
    <!-- <div class="wrapper"> -->
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) of imgs" :key="index">
        <div class="gallary-img" :style="{ backgroundImage: 'url( ' + item + ')' }"></div>
        <!-- <img class="img" src="http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_r_800x800_4701d58f.jpg"> -->
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: 'Gallary',
  props: {
    imgs: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',

        // 以下两个属性是为了解决当gallary组件由隐藏变成显示的时候,swiper由于无法计算宽度导致失效的问题
        observeParents: true,
        observer: true
      }
    }
  },
  // 当点击画廊时,关闭画廊
  methods: {
    handleClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  // 当图片宽高不一致时可以使用下面的代码
  .container >>> .swiper-container
    height 100%
  .container
    // display flex
    // flex-direction column
    // justify-content center
    position fixed
    top 0
    right 0
    bottom 0
    left 0
    z-index 99
    background #000
    // .wrapper
    //   overflow hidden
    //   width 100%
    //   height 0
    //   padding-bottom 100%
    //   .img
    //     width 100%
    .gallary-img
      height 100%
      // background-image url(http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_r_800x800_4701d58f.jpg)
      background-repeat no-repeat
      background-position center
      background-size contain
    .swiper-pagination
      color #fff
</style>
