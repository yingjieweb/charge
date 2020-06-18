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
  @media (min-width: 500px) {
    #app {
      margin: 80px auto;
    }
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #fff;
    font-family: $font-hei;
    font-size: 16px;
    color: #333333;

    width: 375px;
    height: 667px;
  }
</style>