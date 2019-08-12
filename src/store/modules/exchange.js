import currencyApi from '@/api'

const state = {
  rates: {},
  selectedCurrencies: [],
  amount: 0
}

const mutations = {
  setRates (state, value) {
    state.rates = {...value}
  },
  setSelectedCurrencies (state, value) {
    state.selectedCurrencies = state.selectedCurrencies.concat(value || [])
  },
  setAmount (state, value) {
    state.amount = value
  },
  removeSelectedCurrency (state, value) {
    state.selectedCurrencies = state.selectedCurrencies.filter(i => i !== value)
  }
}

const actions = {
  getCurrencyRate ({ commit }) {
    currencyApi.getCurrencyRate((response) => {
      commit('setRates', response.body.rates)
    })
  },
  setSelectedCurrencies ({commit}, data) {
    commit('setSelectedCurrencies', data)
  },
  removeSelectedCurrency ({commit}, data) {
    commit('removeSelectedCurrency', data)
  },
  setAmount ({commit}, data) {
    commit('setAmount', data)
  }
}

const getters = {
  rates (state) {
    return state.rates
  },
  ratesName (state) {
    return Object.keys(state.rates)
      .map(i => i)
  },
  selectedCurrencies (state) {
    return state.selectedCurrencies
  },
  amount (state) {
    return state.amount
  }
}
export default {
  state,
  actions,
  mutations,
  getters
}
