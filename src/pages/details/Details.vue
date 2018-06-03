<template>
  <div>
    <details-banner></details-banner>
    <details-header></details-header>
    <details-list :list="list"></details-list>
    <div style="height: 50rem;"></div>
  </div>
</template>

<script>
import DetailsBanner from './components/Banner'
import DetailsHeader from './components/Header'
import DetailsList from './components/List'
export default {
  name: 'Details',
  components: {
    'details-banner': DetailsBanner,
    'details-header': DetailsHeader,
    'details-list': DetailsList
  },
  data () {
    return {
      list: [{
        title: '成人票',
        children: [{
          title: '成人三馆联票',
          children: [{
            title: '第三层'
          }]
        }, {
          title: '成人五馆联票'
        }]
      }, {
        title: '学生票'
      }, {
        title: '儿童票'
      }]
    }
  }
  // TODO: 这里还要完成activated生命周期钩子的内容,内容为根据不同的id加载不同的详情页
}
</script>

<style lang="stylus" scoped>

</style>
