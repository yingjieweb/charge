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

<script>
  export default {
    name: "Layout"
  }
</script>

<style scoped>
  .layout{
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .nav{
    height: 32px;
    line-height: 32px;
    background-color: #00BFA6;
    border: 1px solid green;
    color: white;
  }
  .content{
    flex-grow: 1;
    overflow: auto;
  }
</style>