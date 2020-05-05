<template>
  <Layout :title="'Money navigator'">
    <template v-slot:content>
      <Tags :tags.sync="tags" @update:tag="onUpdateTag"></Tags>
      <Notes @update:note="onUpdateNote"></Notes>
      <Types @update:type="onUpdateType"></Types>
      <NumberPad @update:amount="onUpdateAmount"></NumberPad>
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
    defaultTag = '衣';
    onUpdateTag(tag: string){
      this.defaultTag = tag;
      console.log(this.defaultTag)
    }
    onUpdateNote(note: string){
      console.log(note)
    }
  }
</script>

<style scoped>

</style>