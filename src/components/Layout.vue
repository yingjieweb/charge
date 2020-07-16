<template>
  <div class="layout">
    <div class="nav">
      <div class="nav-left"><slot name="navLeft"></slot></div>
      <div class="nav-center">{{title}}</div>
      <div class="nav-right"><slot name="navRight"></slot></div>
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
  @import "~@/assets/styles/helper.scss";

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
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .nav-left, .nav-right{
    width: 20px;
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nav-center{
    flex: 1;
  }
  .content{
    flex-grow: 1;
    overflow: auto;
  }
</style>
