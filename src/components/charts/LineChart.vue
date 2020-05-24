<template>
  <div class="lineChart" :style="{width: `${width}px`, height: `${height}px`}">
    <div ref="lineChart" style="width: 100%; height: 100%;"></div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import echarts  from 'echarts'
  import {Component} from "vue-property-decorator";

  @Component
  export default class LineChart extends Vue{
    width = 0;
    height = 0;

    created(){
      this.width = document.documentElement.clientWidth;
      //this.height = document.documentElement.clientWidth * 0.6 ;
      this.height = document.documentElement.clientWidth * 0.6 ;
    }
    mounted(){
      this.init();
    }

    init(){
      const Chart = echarts.init(this.$refs.lineChart as HTMLCanvasElement);
      Chart.setOption({
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
      })
    }
  }

  /*export default {
    name: "LineChart"
  }*/
</script>

<style lang="scss" scoped>

</style>