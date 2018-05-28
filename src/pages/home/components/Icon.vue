<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
          <div class="icon" v-for="item of page" :key="item.id">
            <div class="img-container">
              <img :src="item.imgUrl"
             alt="item.keyword">
            </div>
            <p class="keywords">{{item.keyword}}</p>
          </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcon',
  data () {
    return {
      swiperOption: {},
      iconList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        keyword: '景点门票'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        keyword: '必游榜单'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
        keyword: '踏青赏花'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        keyword: '一日游'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
        keyword: '动植物园'
      }, {
        id: '0006',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        keyword: '故宫'
      }, {
        id: '0007',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png',
        keyword: '古北水镇'
      }, {
        id: '0008',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ed/cf572be30fc32f02.png',
        keyword: 'Q+精选'
      }, {
        id: '0009',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
        keyword: '演出'
      }]
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
