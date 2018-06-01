let defaultCity = '北京'
// 处理用户使用隐身模式或清除本地数据导致浏览器抛出异常
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (error) {}

export default {
  city: defaultCity
}
