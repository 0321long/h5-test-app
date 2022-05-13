<!--
 * @Descripttion: 描述信息
 * @version: 1.0.0
 * @Author: 
 * @Date: 2022-05-12 15:27:26
 * @LastEditors: long
 * @LastEditTime: 2022-05-12 16:35:52
-->
<template>
  <div class="layout">
    <!-- <van-button @click="getChild">获取ref</van-button> -->
    <Menu :data="menuList" @child-method="childMethod" ref="menuRef"></Menu>
    <div class="layout-right">
      <Header></Header>
      <Content></Content>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Menu from './Menu/index.vue';
import Header from './Header/index.vue';
import Content from './Content/index.vue';
import { ref, reactive } from 'vue';

const menuList = reactive([
  {
    id: 1,
    name: '菜单一',
    icon: '',
  },
  {
    id: 2,
    name: '菜单二',
    icon: '',
  },
  {
    id: 3,
    name: '菜单三',
    icon: '',
  }
]);

// 通过子组件进行调用
const childMethod = (...args:any) => {
  let { title, type } = args[0]
  console.log('子组件传递的title', title);
  console.log('子组件传递的type', type);
    
}

const menuRef = ref(null)
const getChild = () => {
  const childRef = menuRef.value
  // childRef.getList()
  console.log(menuRef.value);
  
}
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
  display: flex;
  .sidebar {
    width: 200px;
    border-right: 1px solid;
  }
  .layout-right {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
}
</style>
