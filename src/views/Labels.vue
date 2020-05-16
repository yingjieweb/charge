<template>
  <Layout :title="'Labels navigator'">
    <template v-slot:content>
      <div class="tags">
        <router-link class="tag" v-for="tag in tags" :key="tag" :to="`/labels/edit/${tag}`">
          <span>{{tag}}</span>
          <Icon name="right"/>
        </router-link>
      </div>
      <div class="button-wrapper">
        <Button @click="createTag">新建标签</Button>
      </div>
    </template>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component} from "vue-property-decorator";

  @Component
  export default class Labels extends Vue{
    tags = JSON.parse(window.localStorage.getItem('tags')!);
    createTag(){
      const tagName = window.prompt('请输入新的标签名');
      if (tagName === '' || tagName === null) {
        window.alert('标签名不能为空');
      } else if (this.tags?.includes(tagName!)){
        window.alert('标签名已存在');
      }else if (this.tags) {
        this.tags.push(tagName);
        window.localStorage.setItem('tags',JSON.stringify(this.tags));
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tags {
    font-size: 16px;
    padding-left: 16px;
    > .tag {
      min-height: 44px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #e6e6e6;

      svg {
        width: 18px;
        height: 18px;
        color: #666;
        margin-right: 16px;
      }
    }
  }
  .button-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 28px;
  }
</style>