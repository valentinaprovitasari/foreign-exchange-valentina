import CurrencyItem from '@/components/CurrencyItem.vue'
import {mapGetters} from 'vuex'
import config from '@/config'

export default {
  name: 'currency',
  computed: {
    ...mapGetters(['rates', 'amount', 'selectedCurrencies']),
    ratesMapped () {
      return Object.keys(this.rates)
        .filter(i => this.selectedCurrencies.find(j => j === i))
        .map(i => {
          return {
            name: i,
            rate: (this.rates[i] * this.amount).toFixed(),
            content: (config.rates.content[i]).toFixed(),
            detail: '1 USD = ' + i + this.rates[i]
          }
        }) || {}
    }
  },
  components: {
    CurrencyItem
  }
}
