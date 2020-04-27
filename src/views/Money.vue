<template>
  <Layout :title="'Money navigator'">
    <template v-slot:content>
      <Tags></Tags>
      <Notes></Notes>
      <Types></Types>
      <NumberPad></NumberPad>
    </template>
  </Layout>
</template>

<script lang="ts">
  import Tags from "@/components/money/Tags.vue";
  import Notes from "@/components/money/Notes.vue";
  import Types from "@/components/money/Types.vue";
  import NumberPad from "@/components/money/NumberPad.vue";
  export default {
    name: "Money",
    components: {NumberPad, Types, Notes, Tags},
    data() {
      return {
        title: 'Money'
      }
    }
  }
</script>

<style scoped>

</style>