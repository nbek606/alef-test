import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import persistedState from '@/plugins/persistedState'

/* import modules */
import menu from './modules/menu'
import person from './modules/person'

export default new Vuex.Store({
  modules: {
    menu,
    person
  },
  plugins:[persistedState]
})
