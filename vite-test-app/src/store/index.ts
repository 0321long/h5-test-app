/*
 * @Descripttion: 描述信息
 * @version: 1.0.0
 * @Author: 
 * @Date: 2022-05-10 09:17:18
 * @LastEditors: long
 * @LastEditTime: 2022-05-10 10:24:18
 */
import { createStore } from 'vuex'

import createPersitedState from "vuex-persistedState"
export const store = createStore({
  plugins: [createPersitedState()],
  state: {
    num: 10
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
})