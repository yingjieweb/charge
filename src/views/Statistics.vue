<template>
  <Layout>
    <template v-slot:nav>
      <div>
        Statistics navigator
      </div>
    </template>
    <template v-slot:content>
      Statistics 页面
    </template>
  </Layout>
</template>

<script lang="ts">
  export default {
    name: "Statistics",
    data(){
      return{
        title: 'Statistics'
      }
    }
  }
</script>

<style scoped>

</style>