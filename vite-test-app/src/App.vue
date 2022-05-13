<!--
 * @Descripttion: 描述信息
 * @version: 1.0.0
 * @Author: 
 * @Date: 2022-05-10 09:07:04
 * @LastEditors: long
 * @LastEditTime: 2022-05-12 16:37:42
-->
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from "vue";
// import Hook from "./views/Hook/index.vue"
let show = ref(true)
</script>

<template>
  <!-- <Hook v-if="show"></Hook> -->
  <!-- <button @click="show = !show">改变hook组件显示</button> -->
   <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html, body, #app{
  height: 100%;
  margin: 0;
}
</style>
