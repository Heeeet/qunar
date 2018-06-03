<template>
  <div id="app">
    <!-- TODO: keep-alive-->
    <keep-alive exclude="Details">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  /**
   * TODO:组件name属性的作用:
   *  1. 在使用递归组件的时候需要name
   *  2. 在使用keep-alive中的include和exclude属性时需要name
   *  3. 在使用vue调试工具的时候需要name
   */
  name: 'App'
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
