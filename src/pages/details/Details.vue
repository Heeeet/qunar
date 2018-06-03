<template>
  <div>
    <details-banner></details-banner>
    <details-header></details-header>
    <div style="height: 50rem;"></div>
  </div>
</template>

<script>
import DetailsBanner from './components/Banner'
import DetailsHeader from './components/Header'
export default {
  name: 'Details',
  components: {
    'details-banner': DetailsBanner,
    'details-header': DetailsHeader
  }
  // TODO: 这里还要完成activated生命周期钩子的内容,内容为根据不同的id加载不同的详情页
}
</script>

<style lang="stylus" scoped>

</style>
