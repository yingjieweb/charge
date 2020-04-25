<template>
  <Layout>
    <template v-slot:nav>
      <div>
        Money navigator
      </div>
    </template>
    <template v-slot:content>
      Money 页面
    </template>
  </Layout>
</template>

<script>
  export default {
    name: "Money",
    data() {
      return {
        title: 'Money'
      }
    }
  }
</script>

<style scoped>

</style>