// import store from '@/store'

// 获取文档的 body 元素
const { body } = document
// 定义响应式设计的宽度阈值，参考 Bootstrap 的响应式设计
const WIDTH = 992

export default {
  // 监听当前路由的变化
  // watch: {
    // $route(route) {
      // 如果当前设备是移动端且侧边栏是打开状态，则关闭侧边栏
  //     if (this.device === 'mobile' && this.sidebar.opened) {
  //       store.dispatch('app/closeSideBar', { withoutAnimation: false })
  //     }
  //   }
  // },
  // 在组件挂载前执行
  beforeMount() {
    // 添加窗口大小变化的事件监听器
    window.addEventListener('resize', this.$_resizeHandler)
  },
  // 在组件销毁前执行
  beforeDestroy() {
    // 移除窗口大小变化的事件监听器
    window.removeEventListener('resize', this.$_resizeHandler)
  },
  // 在组件挂载后执行
  mounted() {
    // 检测当前设备是否是移动端
    const isMobile = this.$_isMobile()
    // 如果是移动端，将设备类型设置为 'mobile'，并关闭侧边栏（没有动画效果）
    if (isMobile) {
      store.dispatch('app/toggleDevice', 'mobile')
      store.dispatch('app/closeSideBar', { withoutAnimation: true })
    }
  },
  methods: {
    // 使用 $_ 作为私有方法名，遵循 Vue.js 的命名规范
    // 检测当前设备是否是移动端
    $_isMobile() {
      const rect = body.getBoundingClientRect()
      // 判断 body 元素的宽度是否小于 WIDTH，如果是则认为是移动端设备
      return rect.width - 1 < WIDTH
    },
    // 窗口大小变化事件处理函数
    $_resizeHandler() {
      // 如果文档没有隐藏（例如浏览器标签页没有最小化）
      if (!document.hidden) {
        // 检测当前设备是否是移动端
        const isMobile = this.$_isMobile()
        // 根据设备类型切换 Vuex store 中的设备类型状态
        store.dispatch('app/toggleDevice', isMobile ? 'mobile' : 'desktop')

        // 如果是移动端，关闭侧边栏（没有动画效果）
        if (isMobile) {
          store.dispatch('app/closeSideBar', { withoutAnimation: true })
        }
      }
    }
  }
}
