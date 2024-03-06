import { createRouter, createWebHashHistory } from 'vue-router'
// import ContainerCon from '../views/ContainerCon.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/MainIndex.vue')
  },
  {
    path: '/containerCon',
    name: 'containerCon',
    component: () => import('../views/ContainerCon.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('../views/ProductListShow.vue')
  },
  {
    path: '/UserTable',
    name: 'UserTable',
    component: () => import('../views/UserTable.vue')
  },
  {
    path: '/parentComponent',
    name: 'parentComponent',
    component: () => import('../views/ParentComponent.vue')
  },
  {
    path: '/userManage',
    name: 'userManage',
    component: () => import('../views/UserManagementComponent.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
