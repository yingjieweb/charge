<template>
  <Layout :title="'Edit Label'">
    <div>这是编辑标签页面</div>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component} from "vue-property-decorator";

  @Component
  export default class EditLabel extends Vue{
    created(){
      console.log(this.$route.params);
    }
  }
</script>

<style lang="scss" scoped>

</style>