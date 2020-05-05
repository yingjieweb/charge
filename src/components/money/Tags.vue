<template>
  <div class="tags">
    <ul class="current">
      <li v-for="(tag,index) in tags" :key="tag" @click="selectedTag(index,tag)" :class="{selected: index===currentTagIndex}">{{tag}}</li>
    </ul>
    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component, Prop, Watch} from "vue-property-decorator";

  @Component
  export default class Tags extends Vue{
    @Prop(Array) readonly tags: string[] | undefined;
    currentTagIndex = 0;
    currentTagName = '衣';

    selectedTag(index: string, tag: string){
      this.currentTagIndex = parseInt(index);
      this.currentTagName = tag;
    }
    createTag(){
      const tagName = window.prompt('请输入新的标签名');
      if (tagName === '' || tagName === null) {
        window.alert('标签名不能为空');
      } else if (this.tags?.includes(tagName!)){
        window.alert('标签名已存在');
      }else if (this.tags) {
        this.$emit('update:tags', [...this.tags, tagName]);
      }
    }

    @Watch('currentTagName')
    onTagChanged(newTag: string){
      this.$emit('update:tag',newTag)
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .tags {
    font-size: 14px;
    padding: 16px 10px 16px 16px;
    height: calc(100vh - 537px);
    overflow: auto;
    > .current {
      display: flex;
      flex-wrap: wrap;
      > li {
        $h: 24px;
        height: $h;
        line-height: $h;
        border-radius: $h/2;
        background: #d9d9d9;
        padding: 0 16px;
        margin-right: 10px;
        margin-top: 6px;
        &.selected {
          background: $main-color;
          color: white;
        }
      }
    }
    > .new {
      padding-top: 16px;
      button {
        background: transparent;
        border: none;
        color: #999;
        border-bottom: 1px solid;
        padding: 0 4px;
      }
    }
  }
</style>