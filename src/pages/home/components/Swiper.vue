<template>
  <div class="wrapper">
    <!-- v-if的作用: 当ajax数据还没有返回时, 不创建这个组件, 等数据返回后再创建-->
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img :src="item.imgUrl" alt="去哪儿门票" class="swiper-img">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 2000
      }
    }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  // 由于scoped 的限制, 这里面的样式只对Swiper这个组件有效

  // swiper-pagination-bullet-active 是 VueAwesomeSwiper 这个组件的class, 默认选中的颜色为蓝色
  // 如果直接改 swiper-pagination-bullet-active 的样式是无效的 (scoped的限制)
  // 所以采用样式穿透的方式, 使更改当前组件的样式可以影响到 VueAwesomeSwiper 的样式
  // 这里的意思是设置 .wrapper 下所有 .swiper-pagination-bullet-active 的样式
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    // 图片高宽比为31.25
    // 需要设置为轮播图容器的高度,防止页面加载时出现抖动
    width 100%
    // 这里不能直接设置为 height 31.25%, 因为height的百分比是相对与父容器的
    height 0
    overflow hidden
    // TODO  padding 的百分比是相对父元素的width
    padding-bottom 31.25%
    // TODO 以上三行可以改为(高度为视口的26.67)
    // height 31.25vw
    .swiper-img
      // 图片宽度的百分比是相对于父元素的width
      width 100%
</style>
