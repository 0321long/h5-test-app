<!--
 * @Descripttion: 侧边导航栏组件
 * @version: 1.0.0
 * @Author: 
 * @Date: 2022-05-12 15:27:56
 * @LastEditors: long
 * @LastEditTime: 2022-05-12 16:46:27
-->
<template>
  <div class="sidebar">
    侧边菜单栏
    <Tree :data="menuList"></Tree>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import Tree from "../../../components/Tree/index.vue"

type TreeList = {
  name: string,
  icon?: string,
  children?: TreeList[] | []
}
const menuList = reactive<TreeList[]>([
  {
    name: 'no.1',
    children: [
      {
        name: 'no.1-1',
        children: [
          {
            name: 'no.1-1-1'
          }
        ]
      }
    ]
  },
  {
    name: 'no.2',
    children: [
      {
        name: 'no.2-2'
      }
    ]
  },
  {
    name: 'no.3'
  }
])
</script>