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

Vue.component('TabBar',TabBar)  //全局TabBar
Vue.component('Layout',Layout)  //全局Layout
Vue.component('Icon',Icon)  //全局Icon
Vue.component('Button', Button) //全局按钮
Vue.component('BarChart', BarChart) //条形图
Vue.component('LineChart', LineChart) //折线图
Vue.component('PieChart', PieChart) //饼状图

new Vue({
  router, //router: router
  store,
  render: h => h(App)
}).$mount('#app')
