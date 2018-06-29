import Vue from "vue"
import Vuex, { mapGetters } from "vuex"
Vue.use(Vuex);

import * as actions from './actions'
import * as getters from './getters'
import common from './modules/common'


const store = new Vuex.Store({
  actions,
  getters,
  modules:{
    common
  }
})

export default store






