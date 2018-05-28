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
  data () {
    return {
      weekendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1603/6d/2f67ae0659f41f.jpg_r_640x214_bf6cbd0b.jpg',
        title: '北京赏花好地方',
        desc: '乱花渐欲迷人眼，京城赏花大搜索'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/mixins.styl'
  .title
    background #eee
    margin-top .1rem
    line-height .8rem
    /* 换一种方式*/
    padding-left .2rem
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 33.4%
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
