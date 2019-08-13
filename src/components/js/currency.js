import CurrencyItem from '@/components/CurrencyItem.vue'
import {mapGetters} from 'vuex'
import config from '@/config'
import numberUtil from '@/util/number'

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
            rate: numberUtil.formatNumber(this.rates[i] * this.amount),
            content: (config.rates.content[i]),
            detail: '1 USD = ' + i + numberUtil.formatNumber(this.rates[i])
          }
        }) || {}
    }
  },
  components: {
    CurrencyItem
  }
}
