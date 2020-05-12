<template>
  <Layout :title="'Money navigator'">
    <template v-slot:content>
      <Tags :tags.sync="tags" :defaultTag.sync="record.tag"></Tags>
      <Notes :defaultNote.sync="record.note"></Notes>
      <Types :defaultType.sync="record.type"></Types>
      <NumberPad :defaultAmount.sync="record.amount" @submit="saveRecord"></NumberPad>
    </template>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Tags from "@/components/money/Tags.vue";
  import Notes from "@/components/money/Notes.vue";
  import Types from "@/components/money/Types.vue";
  import NumberPad from "@/components/money/NumberPad.vue";
  import {Component, Watch} from "vue-property-decorator";

  type Record = {
    tag: string;
    note: string;
    type: string;
    amount: number;
    createdTime?: Date;
  }

  @Component({
    components: {NumberPad, Types, Notes, Tags}
  })
  export default class Money extends Vue{
    title = 'Money';
    tags: string[] = JSON.parse(window.localStorage.getItem('tags') || "[]"); //页面第一次加载没有localstorage？
    record: Record = {tag: '衣', note: '', type: '-', amount: 0};
    recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');

    saveRecord(){
      const deepRecord = JSON.parse(JSON.stringify(this.record));
      deepRecord.createdTime = new Date();
      this.recordList.push(deepRecord);

      console.log(this.recordList);
    }

    @Watch('recordList')
    onRecordListChanged(){
      window.localStorage.setItem('recordList',JSON.stringify(this.recordList));
    }
    @Watch('tags',{ immediate: true, deep: true })
    onTagsChanged(){
      window.localStorage.setItem('tags',JSON.stringify(this.tags));
    }
  }
</script>

<style scoped>

</style>