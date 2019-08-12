const config = {
  api: {
    basePath: '',
    currency: {
      latest: '/latest?base=USD'
    }
  },
  rates: {
    name: ['USD', 'CAD', 'IDR', 'GBP', 'CHF', 'SGD', 'INR', 'MYR', 'JPY', 'KRW'],
    content: {
      USD: 'USD - United States Dollar',
      CAD: 'CAD - Canada Dollar',
      IDR: 'IDR - Indonesian Rupiah',
      GBP: 'GBP - British Pound',
      CHF: '',
      SGD: 'SGD - Singapore Dollar',
      INR: 'INR - India Rupee',
      MYR: 'MYR - Malaysia Ringgit',
      JPY: 'JPY - Japanase Yen',
      KRW: 'KRW - Korea Won'
    },
    initialAmount: 10000
  },
  getApiPath: apiPath => `${config.api.basePath}${apiPath}`
}
export default config
