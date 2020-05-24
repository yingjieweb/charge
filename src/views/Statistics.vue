<template>
  <Layout :title="'统计'">
    <template v-slot:content>
      <div class="overview">
        <div class="totalSection">
          <div class="totalAmount">
            <div class="totalNumber">{{balance.toFixed(2)}}</div>
            <div class="totalType">7月结余</div>
          </div>
        </div>
        <div class="detailSection">
          <div class="detail">
            <div class="detailNumber">{{spending.toFixed(2)}}</div>
            <div class="detailType">7月支出</div>
          </div>
          <div class="detail">
            <div class="detailNumber">{{income.toFixed(2)}}</div>
            <div class="detailType">7月收入</div>
          </div>
        </div>
      </div>
      <PieChart v-if="type === '+'"></PieChart>
      <PieChart v-else>111</PieChart>
      <Types :defaultType.sync="type"></Types>
      <LineChart v-if="type === '+'"></LineChart>
      <LineChart v-else>111</LineChart>
    </template>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component} from "vue-property-decorator";
  import Types from "@/components/money/Types.vue";
  @Component({
    components: {Types}
  })
  export default class Statistics extends Vue{
    type = '+';
    recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]');

    get spending(){
      return this.recordList.filter((item: Record<string, string>) => {
        return item.type === '-';
      }).map((item: Record<string, string>) => {
        return Number(item.amount);
      }).reduce((sum: number,item: number) => {
        return sum += item;
      },0)
    }
    get income(){
      return this.recordList.filter((item: Record<string, string>) => {
        return item.type === '+';
      }).map((item: Record<string, string>) => {
        return Number(item.amount);
      }).reduce((sum: number,item: number) => {
        return sum += item;
      },0)
    }
    get balance(){
      return this.income - this.spending;
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .overview{
    padding: 10px;
    color: white;
    height: 106px;
    background-color: $main-color;
    border-top: 1px solid #252628;
    .totalSection{
      display: flex;
      justify-content: center;
      align-items: center;
      .totalAmount{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .totalNumber{
          font-size: 22px;
        }
        .totalType{
          font-size: 12px;
        }
      }
    }
    .detailSection{
      display: flex;
      justify-content: space-around;
      .detail{
        padding-top: 6px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .detailNumber{
          font-size: 17px;
        }
        .detailType{
          font-size: 12px;
        }
      }
    }
  }
</style>