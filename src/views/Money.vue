<template>
  <Layout :title="'Money navigator'">
    <template v-slot:content>
      <Tags :tags.sync="tags"></Tags>
      <Notes></Notes>
      <Types></Types>
      <NumberPad></NumberPad>
    </template>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Tags from "@/components/money/Tags.vue";
  import Notes from "@/components/money/Notes.vue";
  import Types from "@/components/money/Types.vue";
  import NumberPad from "@/components/money/NumberPad.vue";
  import {Component} from "vue-property-decorator";

  @Component({
    components: {NumberPad, Types, Notes, Tags}
  })
  export default class Money extends Vue{
    title = 'Money';
    tags = ['衣','食','住','行'];
    yyy(){
      console.log(111)
    }
  }
</script>

<style scoped>

</style>