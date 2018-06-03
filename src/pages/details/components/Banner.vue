<template>
  <div>
    <div class="banner" @click="handleShowGallary">
      <img :src="bannerImg"
          :alt="sightName"
          class="banner-img">
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          <span class="banner-number-word">{{this.gallaryImgs.length}}</span>
        </div>
      </div>
    </div>
    <fade>
      <gallary :imgs="gallaryImgs" v-show="showGallary" @close="closeGallary"></gallary>
    </fade>
  </div>
</template>

<script>
import Gallary from 'common/gallary/Gallary'
import Fade from 'common/fade/Fade'
export default {
  name: 'DetailsBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleShowGallary () {
      this.showGallary = true
    },
    closeGallary () {
      this.showGallary = false
    }
  },
  components: {
    Gallary,
    Fade
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    width 100%
    overflow hidden
    height 0
    padding-bottom 55%
    position relative
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      height .6rem
      line-height .6rem
      color #fff
      // 渐变
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex 1
        // color #fff
        font-size .32rem
        padding 0 .2rem
      .banner-number
        font-size 0
        height .32rem
        line-height .32rem
        padding 0 .4rem
        margin-top .14rem
        border-radius .2rem
        background rgba(0, 0, 0, .8)
        .banner-icon
          font-size .24rem
        .banner-number-word
          font-size .24rem
          margin-left .1rem
</style>
