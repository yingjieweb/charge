import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router' //默认引入router/index.ts
import store from './store'
import TabBar from '@/components/TabBar.vue'
import Layout from '@/components/Layout.vue'
import Icon from '@/components/Icon.vue'

Vue.config.productionTip = false

Vue.component('TabBar',TabBar)  //全局TabBar
Vue.component('Layout',Layout)  //全局Layout
Vue.component('Icon',Icon)  //全局Icon

new Vue({
  router, //router: router
  store,
  render: h => h(App)
}).$mount('#app')
