<template>
  <Layout :title="'记账'">
    <template v-slot:content>
      <Tags :tags.sync="tags" :defaultTag.sync="record.tag"></Tags>
      <Notes :defaultNote.sync="record.note" field-name="备注" placeholder="请输入账单备注"></Notes>
      <Types :defaultType.sync="record.type"></Types>
      <NumberPad :defaultAmount.sync="record.amount" @submit="saveRecord"></NumberPad>
    </template>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Tags from "@/views/money/components/Tags.vue";
  import Notes from "@/views/money/components/Notes.vue";
  import Types from "@/views/money/components/Types.vue";
  import NumberPad from "@/views/money/components/NumberPad.vue";
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
    tags: string[] = JSON.parse(window.localStorage.getItem('tags') || "[]"); //页面第一次加载没有localstorage？
    record: Record = {tag: '', note: '', type: '-', amount: 0};
    recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');

    created(){
      if (window.localStorage.getItem('tags') === '[]' && this.$store.state.isFirstLoad){
        this.tags = ['餐饮', '购物', '交通', '娱乐', '工资'];
        this.record.tag = '餐饮';
        this.$store.commit('changeLoadState');
      }else {
        this.record.tag = this.tags[0];
      }
    }
    saveRecord(){
      const deepRecord = JSON.parse(JSON.stringify(this.record));
      deepRecord.createdTime = new Date();
      this.recordList.push(deepRecord);

      this.record.note = '';
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
