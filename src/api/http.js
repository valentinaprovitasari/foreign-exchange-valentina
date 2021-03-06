import Vue from 'vue'
import VueResource from 'vue-resource'
import config from '@/config'

Vue.use(VueResource)

export default {
  getData (path, callback, errorHandler) {
    Vue.http.get(config.getApiPath(path), {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }).then(
      response => callback(response),
      error => {
        if (typeof errorHandler === 'function') errorHandler(error)
      }
    )
  }
}
