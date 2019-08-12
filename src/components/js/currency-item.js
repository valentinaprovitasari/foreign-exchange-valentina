import {mapActions} from 'vuex'

export default {
  name: 'currency-item',
  props: {
    currency: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions(['removeSelectedCurrency']),
    removeCurrency (value) {
      this.removeSelectedCurrency(value)
    }
  }
}
