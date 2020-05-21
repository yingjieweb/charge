import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isFirstLoad: true
  },
  mutations: {
    changeLoadState(state){
      state.isFirstLoad = false;
    }
  },
  actions: {
  },
  modules: {
  }
})
