<template>
  <!-- 面包屑导航 -->
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <!-- 遍历面包屑导航项 -->
      <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
        <!-- 如果导航项的重定向属性为 'noRedirect' 或者是最后一个导航项 -->
        <span v-if="item.redirect === 'noRedirect' || index === levelList.length - 1" class="no-redirect">{{ item.meta.title }}</span>
        <!-- 否则渲染一个链接 -->
        <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
import pathToRegexp from 'path-to-regexp'

export default {
  data() {
    return {
      levelList: null
    }
  },
  watch: {
    $route() {
      // 监听路由变化，更新面包屑导航
      this.getBreadcrumb()
    }
  },
  created() {
    // 页面加载时获取面包屑导航
    this.getBreadcrumb()
  },
  methods: {
    // 获取面包屑导航
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.meta && item.meta.title)
      const first = matched[0]

      // 如果当前页面不是首页，则添加一个首页导航项
      // if (!this.isDashboard(first)) {
      //   matched = [{ path: '/dashboard', meta: { title: '首页' }}].concat(matched)
      // }

      // 过滤需要显示的面包屑导航项
      this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
    },
    // 判断当前页面是否是首页
    isDashboard(route) {
      const name = route && route.name
      if (!name) {
        return false
      }
      return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
    },
    // 根据路径模板编译路径
    pathCompile(path) {
      const { params } = this.$route
      var toPath = pathToRegexp.compile(path)
      return toPath(params)
    },
    // 处理导航项点击事件
    handleLink(item) {
      const { redirect, path } = item
      // 如果导航项有重定向属性，则跳转到重定向的路径
      if (redirect) {
        this.$router.push(redirect)
        return
      }
      // 否则根据路径模板编译路径并跳转
      this.$router.push(this.pathCompile(path))
    }
  }
}
</script>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
