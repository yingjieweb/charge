import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Money from '@/views/money/index.vue'
import Labels from '@/views/labels/index.vue'
import Statistics from '@/views/statistics/index.vue'
import NotFound from '@/views/NotFound.vue'
import EditLabel from "@/views/labels/detail.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/money'
  },
  {
    path: '/money',
    component: Money
  },
  {
    path: '/labels',
    component: Labels
  },
  {
    path: '/statistics',
    component: Statistics
  },
  {
    path: '/labels/edit/:tagName',
    component: EditLabel
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
