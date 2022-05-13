<!--
 * @Descripttion: 描述信息
 * @version: 1.0.0
 * @Author: 
 * @Date: 2022-05-12 15:27:56
 * @LastEditors: long
 * @LastEditTime: 2022-05-12 16:05:03
-->
<template>
  <div class="sidebar">
    侧边菜单栏
    <button @click="getParent">调用父组件方法</button>
    <ul v-for="(item, index) in data" :key="index">
      <li>{{item.name}}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

  type props = {
    data: Array<any>
  }
  // 接收父页面传递的参数
  defineProps<props>()
  
  // 调用父组件定义的method
  const emits = defineEmits(['child-method'])
  const getParent = () => {
    const title = ref('child-title')
    emits('child-method',{title: title.value, type: false})
  }
  const list = reactive({
    name: '111'
  })
  const getList = () => {
    console.log(list);
    
  }
  defineExpose({
    list,
    getList
  })
</script>