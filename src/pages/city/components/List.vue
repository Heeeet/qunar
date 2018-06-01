<template>
  <div class="list" ref="wrapper">
    <div>
      <div>
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="wrapper">
            <div class="button">{{this.currenCity}}</div>
          </div>
        </div>
      </div>
      <div>
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="wrapper" v-for="item of hotCities" :key="item.id">
            <div class="button" @click="changeCity(item.name)">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom"
               v-for="city of item"
               :key="city.id"
               @click="changeCity(city.name)"
          >{{city.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  watch: {
    letter () {
      // 此时 this.$refs[this.letter] 为一个数组
      const ele = this.$refs[this.letter][0]
      this.scroll.scrollToElement(ele)
    }
  },
  methods: {
    changeCity (city) {
      // 可以省略调用actions的步骤(异步的方法需要写到actions里面)
      // this.$store.dispatch('changeCity', city)
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
  },
  computed: {
    ...mapState({
      'currenCity': 'city'
    })
  },
  mounted () {
    // console.log(this.$refs.wrapper)
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
      line-height .54rem
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
