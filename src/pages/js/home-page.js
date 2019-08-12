import {mapActions, mapGetters} from 'vuex'
import Currency from '@/components/Currency'
import config from '@/config'

export default {
  name: 'home-page',
  methods: {
    ...mapActions(['getCurrencyRate', 'setAmount', 'setSelectedCurrencies']),
    clickDropDown () {
      this.isActive = !this.isActive
    },
    selectCurrency (value) {
      this.selectedCurrencyName = value
    },
    submitCurrency () {
      this.setSelectedCurrencies([this.selectedCurrencyName])
      this.selectedCurrencyName = this.$t('addCurrencies')
    },
    init () {
      this.setAmount(this.amount)
      this.getCurrencyRate()
    }
  },
  computed: {
    ...mapGetters(['selectedCurrencies']),
    ratesName () {
      return config.rates.name.filter(i => this.selectedCurrencies.indexOf(i) === -1)
    }
  },
  components: {
    Currency
  },
  created () {
    this.init()
  },
  watch: {
    amount () {
      this.setAmount(this.amount)
    }
  },
  data () {
    return {
      amount: config.rates.initialAmount,
      isActive: false,
      selectedCurrencyName: this.$t('addCurrencies')
    }
  }
}
