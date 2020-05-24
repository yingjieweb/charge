<template>
  <div class="barChart" :style="{width: `${width}px`, height: `${height}px`}">
    <div ref="barChart" style="width: 100%; height: 100%;"></div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import echarts from 'echarts'
  import {Component} from "vue-property-decorator";

  @Component
  export default class Barchart extends Vue{
    width = 0;
    height = 0;

    created(){
      this.width = document.documentElement.clientWidth;
      this.height = document.documentElement.clientWidth * 0.7;
    }
    mounted(){
      this.init();
    }

    init(){
      const Chart = echarts.init(this.$refs.barChart as HTMLCanvasElement);
      Chart.setOption({
        tooltip: {},
        xAxis: {
          data: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"]
        },
        yAxis: {},
        series: [{
          type: 'bar',
          data: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"]
        }]
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>