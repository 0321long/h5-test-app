/*
 * @Descripttion: 描述信息
 * @version: 1.0.0
 * @Author: 
 * @Date: 2022-05-10 09:17:06
 * @LastEditors: long
 * @LastEditTime: 2022-05-10 10:30:04
 */
import { createRouter, createWebHashHistory } from 'vue-router';

const Home = () => import('@/views/Home/index.vue')
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})