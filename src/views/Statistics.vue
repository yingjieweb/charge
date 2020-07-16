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

      <LineChart :dataSource="type === '-' ? spendingLineChartData : incomeLineChartData"></LineChart>
    </template>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component} from "vue-property-decorator";
  import Types from "@/components/money/Types.vue";
  import dayjs from "dayjs";

  @Component({
    components: {Types}
  })
  export default class Statistics extends Vue {
    type = '-';
    incomePieChartArray = [{name: '', value: ''}];
    spendingPieChartArray = [{name: '', value: ''}];
    incomeLineChartArray = [{createdDate: '', value: 0}];
    spendingLineChartArray = [{createdDate: '', value: 0}];
    incomeLineChartData =  ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0']
    spendingLineChartData =  ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0']
    recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]');

    created() {
      this.getSpendingPieData();
      this.getIncomePieData();
      this.getSpendingLineData();
      this.getIncomeLineData();
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

    getSpendingPieData() {
      this.spendingArray.forEach((item: Record<string, string>) => {
        const obj = {name: '', value: ''};
        obj.name = item.tag;
        obj.value = item.amount;
        this.spendingPieChartArray.push(obj);
      })
      this.spendingPieChartArray.splice(0, 1);
      if (this.spendingPieChartArray.length === 0) {
        this.spendingPieChartArray.push({name: '支出', value: '0'});
      }
    }

    getIncomePieData() {
      this.incomeArray.forEach((item: Record<string, string>) => {
        const obj = {name: '', value: ''};
        obj.name = item.tag;
        obj.value = item.amount;
        this.incomePieChartArray.push(obj);
      })
      this.incomePieChartArray.splice(0, 1);
      if (this.incomePieChartArray.length === 0) {
        this.incomePieChartArray.push({name: '收入', value: '0'});
      }
    }

    getSpendingLineData() {
      if (this.spendingArray.length > 0){
        for (let i = 0; i < this.spendingArray.length; i++) {
          if (this.spendingLineChartArray[this.spendingLineChartArray.length - 1].createdDate === dayjs(this.spendingArray[i].createdTime).date().toString()) {
            this.spendingLineChartArray[this.spendingLineChartArray.length - 1].value += this.spendingArray[i].amount;
          } else {
            const obj = {createdDate: '', value: 0};
            obj.createdDate = dayjs(this.spendingArray[i].createdTime).date().toString();
            obj.value = this.spendingArray[i].amount;
            this.spendingLineChartArray.push(obj);
          }
        }

        this.spendingLineChartArray.forEach((item) => {
          this.spendingLineChartData[Number(item.createdDate)] = item.value.toString();
        })
      }
    }

    getIncomeLineData() {
      if (this.incomeArray.length > 0){
        for (let i = 0; i < this.incomeArray.length; i++) {
          if (this.incomeLineChartArray[this.incomeLineChartArray.length - 1].createdDate === dayjs(this.incomeArray[i].createdTime).date().toString()) {
            this.incomeLineChartArray[this.incomeLineChartArray.length - 1].value += this.incomeArray[i].amount;
          } else {
            const obj = {createdDate: '', value: 0};
            obj.createdDate = dayjs(this.incomeArray[i].createdTime).date().toString();
            obj.value = this.incomeArray[i].amount;
            this.incomeLineChartArray.push(obj);
          }
        }

        this.incomeLineChartArray.forEach((item) => {
          this.incomeLineChartData[Number(item.createdDate)] = item.value.toString();
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/styles/helper.scss";

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
