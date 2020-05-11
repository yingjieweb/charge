<template>
  <Layout :title="'Labels navigator'">
    <template v-slot:content>
      <div class="tags">
        <router-link class="tag" v-for="tag in tags" :key="tag" :to="`/labels/edit/${tag.id}`">
          <span>{{tag}}</span>
          <Icon name="right"/>
        </router-link>
      </div>
      <div class="createTag-wrapper">
        <Button class="createTag">
          新建标签
        </Button>
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
  .createTag {
    color: white;
    border: none;
    background: #767676;
    border-radius: 4px;
    height: 40px;
    padding: 0 16px;
    &-wrapper {
      text-align: center;
      padding: 16px;
      margin-top: 28px;
    }
  }
</style>