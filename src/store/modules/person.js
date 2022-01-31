const state = {
  list: []
}

const getters = {
  getPersonList: state => state.list
}

const actions = {
  person ({ commit }, payload) {
    commit('setPerson', payload)
  }
}

const mutations = {
  setPerson: (state, payload) => { state.list.push(payload) }
}

export default {
  state,
  getters,
  actions,
  mutations
}