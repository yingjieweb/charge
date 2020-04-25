<template>
  <div class="tab-bar">
    <router-link to="/money" class="tab-bar-item" active-class="selected">
      <Icon name="money"></Icon>
      记账
    </router-link>
    <router-link to="/labels" class="tab-bar-item" active-class="selected">
      <Icon name="label"></Icon>
      标签
    </router-link>
    <router-link to="/statistics" class="tab-bar-item" active-class="selected">
      <Icon name="statistics"></Icon>
      统计
    </router-link>
  </div>
</template>

<script lang="ts">
  export default {
    name: "TabBar"
  }
</script>

<style lang="scss" scoped>
  .tab-bar{
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
    .tab-bar-item{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 2px 0;
    }
    .selected{
      color: #00BFA6;
    }
  }
</style>