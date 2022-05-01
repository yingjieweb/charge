<template>
  <div class="pie-chart">
    <div ref="pieChart" style="width: 100%; height: 100%;"></div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import * as echarts from 'echarts';
  import {Component, Prop, Watch} from "vue-property-decorator";

  @Component
  export default class PieChart extends Vue {
    @Prop() readonly dataSource!: [];

    @Watch('dataSource')
    onDataSourceChanged() {
      const Chart = echarts.init(this.$refs.pieChart as HTMLCanvasElement);
      Chart.setOption({
        series: [{
          data: this.dataSource
        }]
      })
    }

    mounted() {
      const Chart = echarts.init(this.$refs.pieChart as HTMLCanvasElement);
      Chart.setOption({
        tooltip: {
          trigger: 'item',
          triggerOn: 'click',
          showContent: true,
        },
        series: [
          {
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: true,
              position: 'outside'
            },
            emphasis: {
              label: {
                show: true,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: true
            },
            data: this.dataSource
          }
        ]
      })
    }
  }
</script>

<style lang="scss" scoped>
  .pie-chart {
    height: calc((100vh - 264px) / 2);
  }
</style>
