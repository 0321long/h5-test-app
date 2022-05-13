<!--
 * @Descripttion: 页面内容区组件
 * @Date: 2022-05-12 15:27:57
 * @LastEditors: long
 * @LastEditTime: 2022-05-12 18:02:07
-->
<template>
  <div class="content">
    <!-- 全局卡片自定义组件 -->
    <!-- <ul v-for="item in 100">
      <Card :content="item+''"/>
    </ul> -->
    <!-- 动态组件实现选项卡 -->
    <Slot>
      <template>
        {{data}}
      </template>
    </Slot>
    <div class="tabs">
      <div
        class="tab-item"
        v-for="item in data"
        :key="item.name"
        @click="switchCom(item)"
      >
        {{ item.name }}
      </div>
    </div>
    <component :is="current.comName"></component>
  </div>
</template>
<script lang="ts" setup>
import { Tabs } from 'vant';
import { markRaw, reactive } from 'vue';

import Slot from 'components/Slot/index.vue'
import A from '../Custom/A.vue';
import B from '../Custom/B.vue';
import C from '../Custom/C.vue';

type Tabs = {
  name: string;
  comName: any;
};
type Com = Pick<Tabs, 'comName'>;
const data = reactive<Tabs[]>([
  {
    name: 'A组件',
    comName: markRaw(A),
  },
  {
    name: 'B组件',
    comName: markRaw(B),
  },
  {
    name: 'C组件',
    comName: markRaw(C),
  },
]);
// 当前动态组件名称（当前对应tab）
let current = reactive<Com>({
  comName: data[0].comName,
});
// 切换当前渲染的动态组件
const switchCom = (item: Tabs) => {
  current.comName = item.comName;
};
</script>

<style lang="scss" scoped>
.content {
  height: 100%;
  overflow: auto;
  .data-list {
    padding: 10px;
  }
  .tabs {
    display: flex;
    width: 100%;
    border-top: 1px solid;
    .tab-item {
      padding: 8px;
      box-shadow: 0 0 1px #ccc;
      &:hover{
        cursor: pointer;
        background-color: rgba(200, 100, 100, 0.5);
        color: #fff;
      }
    }
  }
}
</style>
