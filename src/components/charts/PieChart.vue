<template>
  <div class="pieChart" :style="{width: `${width}px`, height: `${height}px`}">
    <div ref="pieChart" style="width: 100%; height: 100%;"></div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import echarts from 'echarts'
  import {Component} from "vue-property-decorator";

  @Component
  export default class PieChart extends Vue{
    width = 0;
    height = 0;

    created(){
      this.width = document.documentElement.clientWidth;
      this.height = document.documentElement.clientWidth * 0.54;
    }
    mounted(){
      this.init();
    }

    init(){
      const Chart = echarts.init(this.$refs.pieChart as HTMLCanvasElement);
      Chart.setOption({
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            labelLine: {
              normal: {
                show: true
              }
            },
            data: [
              {value: 335, name: '直接访问'},
              {value: 310, name: '邮件营销'},
              {value: 234, name: '联盟广告'},
              {value: 135, name: '视频广告'},
              {value: 1548, name: '搜索引擎'}
            ]
          }
        ]
      })
    }
  }
  /*export default {
    name: "pieChart"
  }*/
</script>

<style lang="scss" scoped>

</style>