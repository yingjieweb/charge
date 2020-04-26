<template>
  <div class="layout">
    <div class="nav">
      <slot name="nav"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <TabBar></TabBar>
  </div>
</template>

<script lang="ts">
  export default {
    name: "Layout"
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .layout{
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .nav{
    height: 32px;
    line-height: 32px;
    background-color: $main-color;
    color: white;
  }
  .content{
    flex-grow: 1;
    overflow: auto;
  }
</style>