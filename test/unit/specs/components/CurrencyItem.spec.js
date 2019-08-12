import Vuex from 'vuex'
import CurrencyItem from '@/components/CurrencyItem'
import { createLocalVue, shallowMount } from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('CurrencyItem.vue', () => {
  let wrapper, store, getters, actions
  beforeEach(() => {
    actions = {
      removeSelectedCurrency: jest.fn()
    }
    store = new Vuex.Store({
      getters,
      actions
    })
    wrapper = shallowMount(CurrencyItem, {
      localVue,
      store,
      propsData: {
        currency: {
          name: 'SGD'
        }
      }
    })
  })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

  test('removeCurrency', () => {
    wrapper.vm.removeCurrency('SGD')
    expect(actions.removeSelectedCurrency).toBeCalled()
  })
})
