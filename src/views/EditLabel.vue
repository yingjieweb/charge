<template>
  <Layout :title="'Edit Label'">
    <template v-slot:navLeft>
      <Icon name="left" style="border: 1px solid red;"></Icon>
    </template>
    <template v-slot:content>
      <Notes  :defaultNote.sync="note" field-name="标签名" placeholder="请输入新的标签名"></Notes>
      <div class="button-wrapper">
        <Button>删除标签</Button>
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

    note = '';

    created() {
      console.log(this.$route.params);
    }
  }
</script>

<style lang="scss" scoped>
  .button-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 28px;
  }
</style>