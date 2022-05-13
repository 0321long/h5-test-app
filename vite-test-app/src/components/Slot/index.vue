<template>
  <div>
    <slot name="header"></slot>
    <div>
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';


const data = reactive([
  {
    name: '小明'
  }
])
</script>