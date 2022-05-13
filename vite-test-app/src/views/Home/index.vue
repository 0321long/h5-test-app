<!--
 * @Descripttion: 描述信息
 * @version: 1.0.0
 * @Author: 
 * @Date: 2022-05-12 14:44:41
 * @LastEditors: long
 * @LastEditTime: 2022-05-12 14:52:46
-->
<template>
  <van-button>{{data.obj}}</van-button>
  <van-popup v-model:show="data.show">{{data.num}}</van-popup>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const data = reactive({
  show: true,
  num: store.state.num,
  obj: {
    name: '小明',
  },
});
</script>
