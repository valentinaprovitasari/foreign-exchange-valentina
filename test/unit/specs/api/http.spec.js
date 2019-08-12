import Vue from 'vue'
import VueResource from 'vue-resource'
import config from '@/config'
import http from '@/api/http'

Vue.use(VueResource)

describe('http', () => {
  test('getData Success', () => {
    const mockValue = { success: true }
    const callback = response => expect(response).toEqual(mockValue)
    const errorHandler = jest.fn()
    Vue.http.get = jest.fn().mockResolvedValue(mockValue)
    http.getData(config.api.basePath, callback, errorHandler)
  })

  test('getData Fail', () => {
    const mockValue = { success: false }
    const callback = response => expect(response).toEqual(mockValue)
    const errorHandler = jest.fn()
    Vue.http.get = jest.fn().mockRejectedValue(mockValue)
    http.getData(config.api.basePath, callback, errorHandler)
  })
})
