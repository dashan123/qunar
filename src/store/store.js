import Vue from 'vue'
import Vuex from 'vuex'
import thestate from './thestate'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

// const moduleA = {
//   state: thestate,
//   getters,
//   mutations,
//   actions
// }

// const moduleB = {}

const store = new Vuex.Store({
  // modules: {
  //   moduleA: moduleA,
  //   moduleB: moduleB
  // }
  state: thestate,
  getters,
  mutations,
  actions
})

export default store
