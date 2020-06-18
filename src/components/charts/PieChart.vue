<template>
  <div class="pieChart">
    <div ref="pieChart" style="width: 100%; height: 100%;"></div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import echarts from 'echarts'
  import {Component, Prop, Watch} from "vue-property-decorator";

  @Component
  export default class PieChart extends Vue {
    @Prop() readonly dataSource!: [];

    // width = 0;
    // height = 0;

    // created() {
    //   this.width = document.documentElement.clientWidth;
    //   this.height = document.documentElement.clientWidth * 0.54;
    // }

    mounted() {
      this.init();
    }

    init() {
      const Chart = echarts.init(this.$refs.pieChart as HTMLCanvasElement);
      Chart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{b}: {c}￥ ({d}%)'
        },
        series: [
          {
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                position: 'outer',
                show: true
              }
            },
            data: [
              ...this.dataSource
            ]
          }
        ]
      })
    }

    @Watch('dataSource')
    onDataSourceChanged() {
      const Chart = echarts.init(this.$refs.pieChart as HTMLCanvasElement);
      Chart.setOption({
        series: [{
          data: [
            ...this.dataSource
          ]
        }]
      })
    }
  }
</script>

<style lang="scss" scoped>
  .pieChart {
    height: calc((667px - 264px) / 2);
  }
</style>