<template>
  <Layout :title="'编辑标签'">
    <template v-slot:navLeft>
      <Icon name="left" @click.native="goBack"></Icon>
    </template>
    <template v-slot:content>
      <div style="height: 10px"></div>
      <Notes :defaultNote.sync="note" field-name="标签名" placeholder="请输入新的标签名"></Notes>
      <div class="button-wrapper">
        <Button @click="saveNote">保存</Button>
        <Button @click="deleteNote">删除</Button>
      </div>
    </template>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component} from "vue-property-decorator";
  import Notes from "@/components/money/Notes.vue";

  @Component({
    components: {Notes}
  })
  export default class EditLabel extends Vue {

    originalNote = '';
    note = '';

    created() {
      this.originalNote = this.$route.params.tagName;
      this.note = this.$route.params.tagName;
    }
    goBack(){
      this.$router.replace('/labels')
    }
    saveNote(){
      const tags = JSON.parse(localStorage.getItem('tags') || '[]');
      if (tags.includes(this.note)){
        window.alert('当前标签名已存在');
      }else {
        tags.splice(tags.indexOf(this.originalNote), 1, this.note)
        localStorage.setItem('tags', JSON.stringify(tags));
        window.alert('修改成功');
      }
    }
    deleteNote(){
      const tags = JSON.parse(localStorage.getItem('tags') || '[]');
      tags.splice(tags.indexOf(this.originalNote), 1)
      localStorage.setItem('tags', JSON.stringify(tags));
      window.alert('删除成功');
      this.$router.back();
    }
  }
</script>

<style lang="scss" scoped>
  .button-wrapper {
    display: flex;
    justify-content: space-evenly;
    margin-top: 28px;
  }
</style>