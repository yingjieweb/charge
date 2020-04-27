<template>
  <div class="layout">
    <div class="nav">
      {{title}}
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <TabBar></TabBar>
  </div>
</template>

<script lang="ts">
  export default {
    name: "Layout",
    props:['title']
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
    @extend %outerShadow;
    height: 38px;
    line-height: 38px;
    text-align: center;
    background-color: $main-color;
    color: white;
  }
  .content{
    flex-grow: 1;
    overflow: auto;
  }
</style>