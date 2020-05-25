<template>
  <Layout :title="'统计'">
    <template v-slot:content>
      <div class="overview">
        <div class="totalSection">
          <div class="totalAmount">
            <div class="totalNumber">￥{{balance.toFixed(2)}}</div>
            <div class="totalType">结余</div>
          </div>
        </div>
        <div class="detailSection">
          <div class="detail">
            <div class="detailNumber">￥{{spendingNumber.toFixed(2)}}</div>
            <div class="detailType">支出</div>
          </div>
          <div class="detail">
            <div class="detailNumber">￥{{incomeNumber.toFixed(2)}}</div>
            <div class="detailType">收入</div>
          </div>
        </div>
      </div>

      <PieChart :dataSource="type === '-' ? spendingPieChartArray : incomePieChartArray"></PieChart>

      <Types :defaultType.sync="type"></Types>

      <LineChart v-if="type === '-'"></LineChart>
      <LineChart v-else></LineChart>
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
  export default class Statistics extends Vue {
    type = '-';
    incomePieChartArray = [{name: '', value: ''}];
    spendingPieChartArray = [{name: '', value: ''}];
    recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]');

    created() {
      this.getSpendingData();
      this.getIncomeData();
    }

    get spendingArray() {
      return this.recordList.filter((item: Record<string, string>) => {
        return item.type === '-';
      })
    }

    get spendingNumber() {
      return this.spendingArray.map((item: Record<string, string>) => {
        return Number(item.amount);
      }).reduce((sum: number, item: number) => {
        return sum += item;
      }, 0)
    }

    get incomeArray() {
      return this.recordList.filter((item: Record<string, string>) => {
        return item.type === '+';
      })
    }

    get incomeNumber() {
      return this.incomeArray.map((item: Record<string, string>) => {
        return Number(item.amount);
      }).reduce((sum: number, item: number) => {
        return sum += item;
      }, 0)
    }

    get balance() {
      return this.incomeNumber - this.spendingNumber;
    }

    getSpendingData() {
      this.spendingArray.forEach((item: Record<string, string>) => {
        const obj = {name: '', value: ''};
        obj.name = item.tag;
        obj.value = item.amount;
        this.spendingPieChartArray.push(obj);
      })
      this.spendingPieChartArray.splice(0, 1);
      if (this.spendingPieChartArray.length === 0){
        this.spendingPieChartArray.push({name: '支出', value: '0'});
      }
    }

    getIncomeData() {
      this.incomeArray.forEach((item: Record<string, string>) => {
        const obj = {name: '', value: ''};
        obj.name = item.tag;
        obj.value = item.amount;
        this.incomePieChartArray.push(obj);
      })
      this.incomePieChartArray.splice(0, 1);
      if (this.incomePieChartArray.length === 0){
        this.incomePieChartArray.push({name: '收入', value: '0'});
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .overview {
    padding: 10px;
    color: white;
    height: 106px;
    background-color: $main-color;
    border-top: 1px solid #252628;

    .totalSection {
      display: flex;
      justify-content: center;
      align-items: center;

      .totalAmount {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .totalNumber {
          font-size: 22px;
        }

        .totalType {
          font-size: 12px;
        }
      }
    }

    .detailSection {
      display: flex;
      justify-content: space-around;

      .detail {
        padding-top: 6px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .detailNumber {
          font-size: 17px;
        }

        .detailType {
          font-size: 12px;
        }
      }
    }
  }
</style>