export default {
  formatNumber: function (value, decimal = 2) {
    return Number.parseFloat(value).toFixed(decimal)
  }
}
