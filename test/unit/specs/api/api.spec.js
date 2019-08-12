import config from '@/config'
import api from '@/api'
import http from '@/api/http'

describe('api', () => {
  const getSpy = jest.spyOn(http, 'getData')
  const cb = jest.fn()
  const err = jest.fn()
  const cfg = config.api

  test('getCurrencyRate', () => {
    api.getCurrencyRate(cb, err)
    expect(getSpy).toHaveBeenCalledWith(cfg.currency.latest, cb, err)
  })
})
