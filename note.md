#### 除了vue-cli自动引入的依赖包, 项目还需依赖:
```bash
# 解决移动端使用click事件时,会延迟300ms后才执行的问题
cnpm install fastclick --save
# stylus
cnpm install stylus --save
# stylus-loader
cnpm install stylus-loader --save
# vue-awesome-swiper
cnpm install vue-awesome-swiper@2.6.7 --save
# axios
cnpm install axios --save
# better-scroll
cnpm install better-scroll --save
# vuex
cnpm install vuex --save
```
```bash
# 把线上的index-swiper分支合并到本地的master分支
git merge origin/index-swiper
```
> static目录下的文件可以直接访问, 如 http://localhost:8080/static/mock/index.json

#### npm命令
```bash
# 查看全局安装了哪些模块
npm list --depth 0 -g
# 创建一个基于webpack模版的项目
vue init webpack my-project
```
