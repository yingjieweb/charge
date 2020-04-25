<template>
  <svg class="icon">
    <use v-bind:xlink:href="'#'+name"/>
  </svg>
</template>

<script lang="ts">
  //直接引入/assets/icons目录下的所有svg图片，
  const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
  try {importAll(require.context('../assets/icons', true, /\.svg$/));} catch (error) {console.log(error);}

  export default {
    name: "icon",
    props:['name']
  }
</script>

<style lang="scss" scoped>
  .icon {
    width: 32px; height: 32px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>