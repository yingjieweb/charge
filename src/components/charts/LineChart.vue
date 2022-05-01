<template>
  <div class="line-chart">
    <div ref="lineChart" style="width: 100%; height: 100%;"></div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import * as echarts from 'echarts';
  import {Component, Prop, Watch} from "vue-property-decorator";

  @Component
  export default class LineChart extends Vue{
    @Prop() readonly dataSource!: [];

    @Watch('dataSource')
    onDataSourceChanged() {
      const Chart = echarts.init(this.$refs.lineChart as HTMLCanvasElement);
      Chart.setOption({
        series: [{
          data: this.dataSource
        }]
      })
    }

    mounted() {
      const Chart = echarts.init(this.$refs.lineChart as HTMLCanvasElement);
      Chart.setOption({
        xAxis: {
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: true
          },
        },
        grid: {
          top: "15%",
          right: "6%",
          bottom: "15%",
          left: "12%"
        },
        tooltip: {
          show: true,
          formatter: '{b}日: {c}￥'
        },
        series: [{
          type: 'line',
          data: this.dataSource
        }]
      })
    }
  }
</script>

<style lang="scss" scoped>
  .line-chart {
    height: calc((100vh - 264px) / 2);
  }
</style>
