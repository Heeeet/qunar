<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
          <div class="icon" v-for="item of page" :key="item.id">
            <div class="img-container">
              <img :src="item.imgUrl"
             alt="item.desc">
            </div>
            <p class="keywords">{{item.desc}}</p>
          </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcon',
  props: {
    iconList: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        let page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/variables.styl'
  @import '~@/assets/styles/mixins.styl'
  .icons >>> .swiper-container
    // overflow hidden
    width 100%
    height 3.7rem
    padding-top .1rem
    .icon
      float left
      width 25%
      height 1.5rem
      padding-top .1rem
      text-align center
      .img-container
        display inline-block
        width 1.1rem
        height 1.1rem
        img
          width 100%
      .keywords
        margin-top .1rem
        color $darkTextColor
        ellipsis()
  /*
    //另一种实现方式, 不过这种方式当手机翻转时, 图片大小会跟着变化
    .icons
    width 100%
    height 0
    padding-bottom 50%
    overflow hidden
    // height: 50vw
    .icon
      // 1/4
      width 25%
      // 相当于高
      padding-bottom 25%
      height 0
      float left
      overflow hidden
      text-align center
      position relative
      box-sizing border-box
      padding .1rem
      .img-container
        display inline-block
        position absolute
        top 0
        left 0
        right 0
        bottom .44rem
        img
          height 100%
      p
        position absolute
        left 0
        right 0
        bottom 0
        height .44rem
        line-height .44rem
        color $darkColor
  */

</style>
