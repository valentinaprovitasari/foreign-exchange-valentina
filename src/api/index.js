import http from './http'
import config from '@/config'

export default {
  getCurrencyRate: (cb, errHandler) => {
    http.getData(config.api.currency.latest, cb, errHandler)
  }
}
