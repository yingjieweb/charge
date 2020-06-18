import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router' //默认引入router/index.ts
import store from './store' //默认引入store/index.ts

import TabBar from '@/components/TabBar.vue'
import Layout from '@/components/Layout.vue'
import Icon from '@/components/Icon.vue'
import Button from "@/components/common/Button.vue";
import BarChart from "@/components/charts/BarChart.vue"
import LineChart from "@/components/charts/LineChart.vue"
import PieChart from "@/components/charts/PieChart.vue"

Vue.config.productionTip = false

Vue.component('TabBar', TabBar)  //全局TabBar
Vue.component('Layout', Layout)  //全局Layout
Vue.component('Icon', Icon)  //全局Icon
Vue.component('Button', Button) //全局按钮
Vue.component('BarChart', BarChart) //条形图
Vue.component('LineChart', LineChart) //折线图
Vue.component('PieChart', PieChart) //饼状图

new Vue({
  router, //router: router
  store,
  render: h => h(App)
}).$mount('#app')

window.onload = function () {
  setTimeout(function () {
    window.scrollTo(0, 200);
  }, 0);
};

//监测手机端 - 展示二维码
if (document.documentElement.clientWidth > 500) {
  window.alert('该应用主要面向移动端用户，推荐您使用手机扫描内部二维码的方式打开，以保证浏览效果！ ^ ~ ^\n\n' +
      ' 如果您是开发人员，可通过控制台调试的方式进行查看，该应用同时适配多种类型的手机设备！ ^ ~ ^');
  const img = document.createElement('img');
  img.src = './qrcode.png';
  img.style.position = 'fixed';
  img.style.left = '65%';
  img.style.top = '50%';
  img.style.zIndex = '1';
  img.style.transform = 'translate(-50%,-50%)';
  img.style.boxShadow = '0 0 10px rgba(0,0,0,0.25)';
  document.body.appendChild(img);
}