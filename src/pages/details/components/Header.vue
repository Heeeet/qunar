<template>
  <div>
    <router-link tag="div"
                 to="/"
                 class="header-abs"
                 v-show="showAbs">
      <span class="iconfont header-abs-back">&#xe624;</span>
    </router-link>
    <div class="header-fixed"
         v-show="!showAbs"
         :style="opacityStyle">
      <h1 class="header-desc">{{headerDesc}}</h1>
      <router-link tag="span" to="/" class="iconfont header-fixed-back">&#xe624;</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailsHeader',
  props: {
    sightName: String
  },
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  computed: {
    headerDesc () {
      return this.sightName.slice(0, this.sightName.indexOf('('))
    }
  },
  methods: {
    handleScroll () {
      // 各浏览器获取scrollTop的方法不一致, 具体百度
      const top = document.documentElement.scrollTop || document.body.scrollTop
      // alert(top)
      // if (top < 60) {
      //   this.showAbs = true
      // } else if (top >= 60 && top < 140) {
      //   const opacity = top / 140
      //   this.opacityStyle = { opacity }
      //   this.showAbs = false
      // }

      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  // 当使用<keep-alive exclude="Details"></keep-alive> 时, activated和deactivated会失效
  // activated () {
  //   // 将事件绑定在全局对象上会影响到其他组件(这里应该很好理解)
  //   console.log('act')
  //   window.addEventListener('scroll', this.handleScroll)
  // },
  // // 当当前组件被停止时,解绑全局对象上的scroll事件,这样就不会污染到其他组件了
  // deactivated () {
  //   window.removeEventListener('scroll', this.handleScroll)
  // }
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/variables.styl'
  @import '~@/assets/styles/mixins.styl'
  .header-abs
    position absolute
    left .2rem
    top .2rem
    width .8rem
    height .8rem
    line-height .8rem
    text-align center
    border-radius 50%
    background rgba(0, 0, 0, .8)
    .header-abs-back
      color #fff
      font-size .4rem
  .header-fixed
    position fixed
    top 0
    left 0
    right 0
    z-index 2
    height $headerHeight
    line-height $headerHeight
    text-align center
    color #fff
    font-size .32rem
    background $bgColor
    .header-desc
      margin 0 1rem
      ellipsis()
    .header-fixed-back
      position absolute
      top 0
      left 0
      width .64rem
      font-size .4rem
</style>
