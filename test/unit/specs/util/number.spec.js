import numberUtil from '@/util/number'

describe('numberUtil', () => {
  test('numberFormat', () => {
    expect(numberUtil.formatNumber(1000.45678)).toBe('1000.46')
  })
})
