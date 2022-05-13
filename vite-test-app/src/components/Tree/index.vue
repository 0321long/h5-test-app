<!--
 * @Descripttion: 侧边菜单属性结构(递归组件)
 * @version: 1.0.0
 * @Author: 
 * @Date: 2022-05-12 16:24:32
 * @LastEditors: long
 * @LastEditTime: 2022-05-12 16:46:06
-->
<template>

  <div style="margin-left: 10px">
    <div v-for="(item, index) in data" :key="index">
      {{item.name}}
      <TreeItem v-if="item?.children?.length" :data="item.children"></TreeItem>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TreeItem from "./index.vue"

type TreeList = {
  name: string,
  icon?: string,
  children?: TreeList[] | []
}
type Props = {
  data?: TreeList[]
}
defineProps<Props>()

</script>
<!-- <script lang="ts">
  export default{
    name: 'TreeItem'
  }
</script> -->

<style lang="scss" scoped>

</style>