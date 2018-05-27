// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
// TODO:可以在 webpack.base.conf.js 文件中的 resolve 属性中定义路径别名
import '@/assets/styles/reset.css'
// 解决移动端1px问题
import '@/assets/styles/border.css'
import '@/assets/styles/iconfont.css'

Vue.config.productionTip = false
// 解决移动端使用click事件时,会延迟300ms后才执行的问题
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
