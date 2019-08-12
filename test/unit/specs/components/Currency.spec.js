import Vuex from 'vuex'
import Currency from '@/components/Currency'
import { createLocalVue, shallowMount } from '@vue/test-utils'

jest.mock('@/components/CurrencyItem.vue', () => {})

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Currency.vue', () => {
  let wrapper, store, getters, actions, init
  beforeEach(() => {
    init = {
      rates: {
        'SGD': 10000,
        'JYP': 15000
      },
      amount: 10,
      selectedCurrencies: ['SGD']
    }
    getters = {
      rates: () => init.rates,
      amount: () => init.amount,
      selectedCurrencies: () => init.selectedCurrencies
    }
    store = new Vuex.Store({
      getters,
      actions
    })
    wrapper = shallowMount(Currency, {
      localVue,
      stubs: [
        'currency-item'
      ],
      store
    })
  })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

  test('ratesMapped', () => {
    expect(wrapper.vm.ratesMapped).toEqual([
      {
        'content': 'SGD - Singapore Dollar', 'detail': '1 USD = SGD10000', 'name': 'SGD', 'rate': 100000
      }]
    )
  })
})
