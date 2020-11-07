import Vue from 'vue'
import Vuex from 'vuex'

import pokemon from './pokemon'

Vue.use(Vuex)

export default function () {
  const Store = new Vuex.Store({
    modules: {
      pokemon
    }
  })

  return Store
}
