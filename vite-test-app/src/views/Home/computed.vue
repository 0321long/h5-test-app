<!--
 * @Descripttion: 描述信息
 * @version: 1.0.0
 * @Author: 
 * @Date: 2022-05-10 09:18:46
 * @LastEditors: long
 * @LastEditTime: 2022-05-12 14:52:46
-->
<template>
  <div>
    <!-- 使用watch监听数据 -->
    <input type="text" v-model="inputVal" />
    <input type="text" v-model="inputVal2" />
    <input type="text" v-model="deepVal.obj.name" />
    <input type="text" v-model="deepVal2.obj.name" />
    <table border align="center" width="800px">
      <thead>
        <tr>
          <th>名称</th>
          <th>数量</th>
          <th>单价</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tableData" :key="index">
          <td>{{ item.name }}</td>
          <td>
            <button @click="changeNum(item, false)">-</button>{{ item.num
            }}<button @click="changeNum(item, true)">+</button>
          </td>
          <td>{{ item.num * item.price }}</td>
          <td><button @click="del(index)">删除</button></td>
        </tr>
      </tbody>
      <tfoot>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr>
          合计：{{
            totalMoney
          }}
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script lang="ts">
import { computed, ref, reactive, defineComponent, watch } from 'vue';
export default defineComponent({
  setup() {
    type table = {
      name: string;
      num: number;
      price: number;
    };
    let totalMoney = ref(0);
    const tableData = reactive<table[]>([
      {
        name: '裤子',
        num: 1,
        price: 80,
      },
      {
        name: '短袖',
        num: 1,
        price: 100,
      },
      {
        name: '鞋子',
        num: 1,
        price: 200,
      },
    ]);

    // 改变对应数值
    const changeNum = (item: table, type: boolean) => {
      if (item.num < 99 && type) {
        item.num++;
      }
      if (item.num > 1 && !type) {
        item.num--;
      }
      // total()
    };
    const del = (index: number) => {
      tableData.splice(index, 1);
      // total()
    };
    // 计算总价方法
    // 1：原始写法
    // const total = () => {
    //   totalMoney.value = tableData.reduce((prev, next) => {
    //     return prev + (next.num * next.price)
    //   }, 0)
    // }
    // total()
    // 2：computed计算属性方式
    // 每次改变总价时候都需要进行一次调用，造成代码冗余，可使用computed进行替换
    totalMoney = computed<number>(() => {
      return tableData.reduce((prev, next) => {
        return prev + next.num * next.price;
      }, 0);
    });

    // watch监听数据改变
    let inputVal = ref('');
    let inputVal2 = ref('');
    // 单一数据监听
    watch(inputVal, (newVal, oldVal) => {
      console.log('新数据', newVal);
      console.log('旧数据', oldVal);
    });
    // 多数据监听
    watch([inputVal, inputVal2], (newVal, oldVal) => {
      console.log('新数据---', newVal);
      console.log('旧数据---', oldVal);
    });
    // 深层次数据监听 ref数据
    // 使用watch第三个参数传入deep为true开启深层监听模式
    // ref定义的深层数据使用watch监听新旧值一样，深层数据可使用reactive进行定义
    let deepVal = ref({
      obj: {
        name: '',
      },
    });
    watch(
      deepVal,
      (newVal, oldVal) => {
        console.log('ref新数据', newVal);
        console.log('ref旧数据', oldVal);
      },
      {
        deep: true,
      }
    );
    // 深层次数据监听 reactive数据
    let deepVal2 = reactive({
      obj: {
        name: '',
      },
    });
    // watch可以使用函数进行监听某一项子级
    // () => deepVal2.obj.name
    watch(deepVal2, (newVal, oldVal) => {
      console.log('reactive新数据', newVal);
      console.log('reactive旧数据', oldVal);
    });
    return {
      totalMoney,
      tableData,
      inputVal,
      inputVal2,
      deepVal,
      deepVal2,
      changeNum,
      del,
    };
  },
});
</script>
