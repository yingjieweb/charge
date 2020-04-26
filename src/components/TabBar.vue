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
  @import "~@/assets/style/helper.scss";

  .tab-bar{
    @extend %outerShadow;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .tab-bar-item{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 2px 0;
    }
    .selected{
      color: $main-color;
    }
  }
</style>