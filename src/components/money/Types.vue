<template>
  <div>
    <ul class="types">
      <li :class="type==='-' && 'selected'" @click="selectType('-')">支出</li>
      <li :class="type==='+' && 'selected'" @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component, Prop, Watch} from "vue-property-decorator";

  @Component
  export default class Types extends Vue{
    @Prop(String) readonly defaultType!: string;

    type = this.defaultType;

    selectType(type: string){
      if (type !== '-' && type !== '+'){
        throw new Error('type is unknow');
      }
      this.type = type;
    }
    @Watch('type')
    onTypeChanged(newValue: string){
      this.$emit('update:defaultType', newValue)
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/styles/helper.scss";

  .types {
    background: #c4c4c4;
    display: flex;
    text-align: center;
    font-size: 24px;
    > li {
      width: 50%;
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      /*position: relative;*/
      &.selected {
        color: white;
        background: $main-color;
      }
      /*
      &.selected::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: $main-color;
      }
      */
    }
  }
</style>
