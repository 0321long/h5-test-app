<!--
 * @Descripttion: 描述信息
 * @version: 1.0.0
 * @Author: 
 * @Date: 2022-05-10 09:18:46
 * @LastEditors: long
 * @LastEditTime: 2022-05-10 10:26:10
-->
<template>
  <van-button>vant按钮组件</van-button>
  <van-popup v-model:show="data.show">{{$store.state.num}}</van-popup>
</template>

<script lang="ts">
import { reactive } from "vue";
import { Store } from "vuex"
export default{
  setup(){
    const data = reactive({
      show: true
    })
    console.log(Store);
    
    return {
      data
    }
  }
}
</script>