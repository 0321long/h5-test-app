<template>
  <div class="card">
    <div class="card-head">
      <div class="card-head-left">主标题</div>
      <div class="card-head-rihgt">副标题</div>
    </div>
    <div class="card-content">
      {{ '内容' + content }}
    </div>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  content: string;
};
defineProps<Props>();
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  border: 0.5px solid;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  &:hover {
    box-shadow: 0 0 10px #ccc;
    cursor: pointer;
  }
  .card-head {
    display: flex;
    flex: 1;
    justify-content: space-between;
    margin-bottom: 10px;
  }
}
</style>
