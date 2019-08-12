import Vue from 'vue'
import Vuex from 'vuex'
import exchange from './modules/exchange'

Vue.use(Vuex)

const modules = {
  exchange
}

export default new Vuex.Store({
  modules
})
