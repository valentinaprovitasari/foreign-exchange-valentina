import exchange from '@/store/modules/exchange'
import api from '@/api'

describe('Mutations', () => {
  test('setRates', () => {
    const state = { rates: {} }
    const value = {AUD: 10000}
    exchange.mutations.setRates(state, value)
    expect(state.rates).toEqual(value)
  })

  test('setSelectedCurrencies', () => {
    const state = { selectedCurrencies: [] }
    const value = ['AUD']
    exchange.mutations.setSelectedCurrencies(state, value)
    expect(state.selectedCurrencies).toEqual(value)
  })

  test('setAmount', () => {
    const state = { amount: 0 }
    const value = 10000
    exchange.mutations.setAmount(state, value)
    expect(state.amount).toBe(value)
  })

  test('removeSelectedCurrency', () => {
    const state = { selectedCurrencies: ['AUD'] }
    const value = 'AUD'
    exchange.mutations.removeSelectedCurrency(state, value)
    expect(state.selectedCurrencies).toEqual([])
  })
})

describe('getters', () => {
  test('rates', () => {
    const state = { rates: {AUD: 1000} }
    expect(exchange.getters.rates(state)).toEqual(state.rates)
  })

  test('ratesName', () => {
    const state = { rates: {AUD: 1000, SGD: 5000} }
    expect(exchange.getters.ratesName(state)).toEqual(['AUD', 'SGD'])
  })

  test('selectedCurrencies', () => {
    const state = { selectedCurrencies: ['AUD', 'SAMSUNG'] }
    expect(exchange.getters.selectedCurrencies(state)).toEqual(state.selectedCurrencies)
  })

  test('amount', () => {
    const state = { amount: 15000 }
    expect(exchange.getters.amount(state)).toBe(state.amount)
  })

  describe('actions', () => {
    test('getCurrencyRate', () => {
      const response = { body: { rates: { AUD: 5000 } } }
      const success = jest.fn()
      const commit = jest.fn()
      api.getCurrencyRate = jest.fn(cb => cb(response))
      exchange.actions.getCurrencyRate({ commit }, { success })
      expect(commit).toHaveBeenCalledWith('setRates', response.body.rates)
    })

    test('setSelectedCurrencies', () => {
      const data = 'SGD'
      const commit = jest.fn()
      exchange.actions.setSelectedCurrencies({ commit }, data)
      expect(commit).toHaveBeenCalledWith('setSelectedCurrencies', data)
    })

    test('removeSelectedCurrency', () => {
      const data = 'SGD'
      const commit = jest.fn()
      exchange.actions.removeSelectedCurrency({ commit }, data)
      expect(commit).toHaveBeenCalledWith('removeSelectedCurrency', data)
    })

    test('setAmount', () => {
      const data = 6000
      const commit = jest.fn()
      exchange.actions.setAmount({ commit }, data)
      expect(commit).toHaveBeenCalledWith('setAmount', data)
    })
  })
})
