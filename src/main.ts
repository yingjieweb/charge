import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router' //默认引入router/index.ts
import store from './store'
import TabBar from '@/components/tabbar/TabBar.vue'

Vue.config.productionTip = false

Vue.component('TabBar',TabBar)  //全局TabBar

new Vue({
  router, //router: router
  store,
  render: h => h(App)
}).$mount('#app')
