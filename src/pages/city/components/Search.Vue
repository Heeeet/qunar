<template>
  <div>
    <div class="search">
      <input type="text"
             placeholder="输入城市名或拼音"
             class="search-input"
             v-model="keyword"
      >
    </div>
    <div class="search-content" ref="search" v-show="showSearchContent">
      <ul>
        <li v-for="item of list"
            :key="item.id"
            class="search-item border-bottom"
            @click="changeCity(item.name)"
        >{{item.name}}</li>
        <li v-if="showSearchList" class="search-item border-bottom">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null,
      isClick: false
      // showSearchContent: false
    }
  },
  computed: {
    showSearchList () {
      return !this.list.length
    },
    showSearchContent () {
      return !!this.keyword.length && (!this.isClick)
    }
  },
  watch: {
    keyword () {
      this.isClick = false
      // 函数节流
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        // console.log(this.keyword)
        if (this.keyword === '') {
          this.list = []
          return
        }
        const result = []
        for (let key in this.cities) {
          this.cities[key].forEach(element => {
            if (element.spell.indexOf(this.keyword) > -1 || element.name.indexOf(this.keyword) > -1) {
              result.push(element)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  methods: {
    changeCity (city) {
      this.isClick = true
      this.keyword = ''
      this.$store.commit('changeCity', city)
      // 详见vue-router文档: 编程式导航
      this.$router.push('/')
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/variables.styl'
  .search
    height .72rem
    background  $bgColor
    padding 0 .1rem
    .search-input
      height .62rem
      line-height .62rem
      width 100%
      text-align center
      border-radius .06rem
      color #666
      box-sizing border-box
      padding 0 .1rem
  .search-content
    // margin 0 .1rem
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    z-index 1
    background #eee
    .search-item
      height .62rem
      line-height .62rem
      padding-left .2rem
      color #666
      background #fff
</style>
