<template>
  <div>
    <label class="notes">
      <span class="name">{{fieldName}}</span>
      <input type="text" v-model="note" :placeholder="this.placeholder">
    </label>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component, Prop, Watch} from "vue-property-decorator";

  @Component
  export default class Notes extends Vue{
    @Prop(String) readonly defaultNote!: string;
    @Prop({required: true}) fieldName!: string;
    @Prop() placeholder?: string;

    note = this.defaultNote;

    @Watch('defaultNote')
    onDefaultNoteChange(){
      this.note = this.defaultNote;
    }
    @Watch('note')
    onNoteChanged(newValue: string){
      this.$emit('update:defaultNote', newValue)
    }
  }
</script>

<style lang="scss" scoped>
  .notes {
    font-size: 14px;
    background: #f5f5f5;
    padding-left: 16px;
    display: flex;
    align-items: center;
    .name {
      padding-right: 16px;
    }
    input {
      height: 64px;
      flex-grow: 1;
      background: transparent;
      border: none;
      padding-right: 16px;
    }
  }
</style>