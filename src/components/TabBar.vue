<template>
  <div class="tab-bar">
    <router-link to="/money">记账</router-link>|
    <router-link to="/labels">标签</router-link>|
    <router-link to="/statistics">统计</router-link>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  .tab-bar{
    border: 1px solid black;
  }
</style>