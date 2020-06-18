<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import "~@/assets/style/reset.scss";
  @import "~@/assets/style/helper.scss";

  body {
    background-color: #F9F1E0;
  }
  @media (min-width: 420px) {
    #app {
      margin: 0 auto;
      max-width: 420px;
    }
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #fff;
    font-family: $font-hei;
    font-size: 16px;
    color: #333333;
  }
</style>