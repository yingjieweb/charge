<template>
  <Layout :title="'Labels navigator'">
    <template v-slot:content>
      Labels 页面
    </template>
  </Layout>
</template>

<script lang="ts">
  export default {
    name: "Labels",
    data(){
      return{
        title: 'Labels'
      }
    }
  }
</script>

<style scoped>

</style>