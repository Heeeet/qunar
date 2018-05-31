<template>
  <ul class="list">
    <li class="item" v-for="(item, key) of cities" :key="key">{{key}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/variables.styl'
  .list
    // TODO: flex布局不懂, 之后再来看
    display flex
    flex-direction column
    justify-content center

    position absolute
    right 0
    top 1.58rem
    bottom 0
    width .4rem
    .item
      text-align center
      height .4rem
      line-height .44rem
      color $bgColor
</style>
