<template>
  <div>
    <details-banner :sightName="sightName"
                    :bannerImg="bannerImg"
                    :gallaryImgs="gallaryImgs">
    </details-banner>
    <details-header :sightName="sightName"></details-header>
    <details-list :list="categoryList"></details-list>
    <div style="height: 50rem;"></div>
  </div>
</template>

<script>
import DetailsBanner from './components/Banner'
import DetailsHeader from './components/Header'
import DetailsList from './components/List'
import axios from 'axios'
export default {
  name: 'Details',
  components: {
    'details-banner': DetailsBanner,
    'details-header': DetailsHeader,
    'details-list': DetailsList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: []
      // lastId: ''
    }
  },
  methods: {
    getDetailsInfo () {
      axios.get('/api/details.json', {
        params: {
          id: this.$route.params.id
        }
      })
        .then(this.getDetailsInfoSucc)
    },
    getDetailsInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.categoryList = data.categoryList
      }
    }
  },
  mounted () {
    // this.lastId = this.$route.params.id
    this.getDetailsInfo()
  }
  // 可以用exclude代替这种方式 <keep-alive exclude="Details"></keep-alive>
  // activated () {
  //   if (this.lastId !== this.$route.params.id) {
  //     this.getDetailsInfo()
  //     this.lastId = this.$route.params.id
  //   }
  // }
  // TODO: 这里还要完成activated生命周期钩子的内容,内容为根据不同的id加载不同的详情页
}
</script>

<style lang="stylus" scoped>

</style>
