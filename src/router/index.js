import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: '工作台', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/workbench/table/index'),
        meta: { title: '打卡签到', icon: 'el-icon-date' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/workbench/tree/index'),
        meta: { title: '业绩排行榜', icon: 'el-icon-s-flag' }
      },
      {
        path: 'orderRateRanking',
        name: 'OrderRateRanking',
        component: () => import('@/views/workbench/OrderRateRanking/index'),
        meta: { title: '成单率排行榜', icon: 'el-icon-s-flag' }
      },
      {
        path: 'operationaldata',
        name: 'Operationaldata',
        component: () => import('@/views/workbench/Operationaldata/index'),
        meta: { title: '平台运营数据', icon: 'el-icon-s-data' }
      }
    ]
  },


  {
    path: '/form',
    component: Layout,
    redirect: '/form/menu1',
    meta: { title: '产品管理', icon: 'el-icon-coin'},
    children: [
      {
        path: 'warehouse',
        component: () => import('@/views/form/Goodslist/index'), 
        name: 'warehouse',
        meta: { title: '产品列表',icon: 'el-icon-s-custom' },
      },
      {

        path: 'overduecustomer',
        component: () => import('@/views/form/Goodstype/index'),
        name: 'overduecustomer',
        meta: { title: '产品类型' ,icon: 'el-icon-s-custom' }
      },
    ]
  },

// 客户资源
  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: '客户资源',
      icon: 'el-icon-s-custom'
    },
    children: [
      {
        path: 'warehouse',
        component: () => import('@/views/nested/menu1/index'), 
        name: 'warehouse',
        meta: { title: '客户仓库',icon: 'el-icon-s-custom' },
      },
      {

        path: 'overduecustomer',
        component: () => import('@/views/nested/menu2/index'),
        name: 'overduecustomer',
        meta: { title: '逾期客户' ,icon: 'el-icon-s-custom' }
      },
      {
        path: 'lostcustomer',
        component: () => import('@/views/nested/menu2/index'),
        name: 'lostcustomer',
        meta: { title: '丢单客户',icon: 'el-icon-s-custom' }
      }
    ]
  },

  

  { path: '*', redirect: '/404', hidden: true }
]


const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher 
}

export default router
