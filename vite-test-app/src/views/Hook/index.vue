<!--
 * @Descripttion: 描述信息
 * @version: 1.0.0
 * @Author: 
 * @Date: 2022-05-12 14:33:32
 * @LastEditors: long
 * @LastEditTime: 2022-05-12 14:43:26
-->
<template>
  <input type="text" id="test" value="vue3生命周期函数" />
  <div>{{ count }}</div>
  <button @click="count++">更新数据</button>
</template>

<script lang="ts" setup>
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  ref,
} from 'vue';

let count = ref(0);

onBeforeMount(() => {
  const el = document.querySelector('#test');
  console.log('挂载之前', el);
});
onMounted(() => {
  const el = document.querySelector('#test');
  console.log('挂载完成', el);
});
onBeforeUpdate(() => {
  console.log('更新之前');
});
onUpdated(() => {
  console.log('更新完成');
});
onBeforeUnmount(() => {
  console.log('销毁之前');
});
onUnmounted(() => {
  console.log('销毁结束');
});
</script>
