<template>
  <Layout :title="'Money navigator'">
    <template v-slot:content>
      <Tags :tags.sync="tags" :defaultTag.sync="record.tag"></Tags>
      <Notes :defaultNote.sync="record.note"></Notes>
      <Types :defaultType.sync="record.type"></Types>
      <NumberPad :defaultAmount.sync="record.amount"></NumberPad>{{record}}
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

  type Record = {
    tag: string;
    note: string;
    type: string;
    amount: number;
  }

  @Component({
    components: {NumberPad, Types, Notes, Tags}
  })
  export default class Money extends Vue{
    title = 'Money';
    tags = ['衣','食','住','行'];
    record: Record = {tag: '衣', note: '', type: '-', amount: 0}
  }
</script>

<style scoped>

</style>