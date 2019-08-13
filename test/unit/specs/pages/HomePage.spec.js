import Vuex from 'vuex'
import HomePage from '@/pages/HomePage.vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import i18n from '@/i18n'

jest.mock('@/components/Currency.vue', () => {})

const localVue = createLocalVue()
localVue.use(Vuex)

describe('HomePage.vue', () => {
  let wrapper, store, getters, actions, state
  const $t = () => {}
  beforeEach(() => {
    state = {
      selectedCurrencies: []
    }
    getters = {
      selectedCurrencies: state => state.selectedCurrencies
    }
    actions = {
      getCurrencyRate: jest.fn(),
      setAmount: jest.fn(),
      setSelectedCurrencies: jest.fn()
    }
    store = new Vuex.Store({
      state,
      getters,
      actions
    })
    wrapper = shallowMount(HomePage, {
      localVue,
      store,
      i18n,
      stubs: ['currency']
    })

    wrapper.vm.amount = 10000
  })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

  test('showCurrency', () => {
    wrapper.vm.isActive = false
    wrapper.vm.showCurrency()
    expect(wrapper.vm.isActive).toBeTruthy()
  })

  test('selectCurrency', () => {
    wrapper.vm.selectedCurrencyName = 'SGD'
    wrapper.vm.selectCurrency('AUD')
    expect(wrapper.vm.selectedCurrencyName).toBe('AUD')
  })

  test('submitCurrency', () => {
    wrapper.vm.selectedCurrencyName = 'SGD'
    wrapper.vm.submitCurrency()
    expect(wrapper.vm.selectedCurrencyName).toBe('Tambah mata uang')
    expect(actions.setSelectedCurrencies).toBeCalled()
  })

  test('ratesName', () => {
    state.selectedCurrencies = ['USD']
    expect(wrapper.vm.ratesName).toEqual(['CAD', 'IDR', 'GBP', 'CHF', 'SGD', 'INR', 'MYR', 'JPY', 'KRW'])
  })

  test('watch amount', done => {
    wrapper.vm.$nextTick(() => {
      expect(actions.setAmount).toBeCalled()
      done()
    })
    wrapper.vm.amount = 15000
  })
})
