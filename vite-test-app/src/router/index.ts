/*
 * @Descripttion: 描述信息
 * @version: 1.0.0
 * @Author: 
 * @Date: 2022-05-10 09:17:06
 * @LastEditors: long
 * @LastEditTime: 2022-05-12 15:34:58
 */
import { createRouter, createWebHashHistory } from 'vue-router';

const Home = () => import('@/views/Home/index.vue')
const Layout = () => import('@/views/Layout/index.vue')
const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})