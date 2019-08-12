// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '@/router'
import store from '@/store'
import i18n from '@/i18n'

require('@/assets/css/main.scss')

/* eslint-disable no-new */
export default {
  start () {
    if (process.env.NODE_ENV !== 'production') {
      Vue.config.devtools = true
    }
    new Vue({
      el: '#app',
      store,
      router,
      components: { App },
      i18n,
      template: '<App/>'
    })
  }
}
