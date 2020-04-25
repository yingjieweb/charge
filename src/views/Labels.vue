<template>
  <Layout>
    <template v-slot:nav>
      <div>
        Labels navigator
      </div>
    </template>
    <template v-slot:content>
      Labels 页面
    </template>
  </Layout>
</template>

<script>
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