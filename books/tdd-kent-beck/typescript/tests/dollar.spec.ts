import { Dollar } from '../src/Dollar'

describe('Dollar', () => {
  test('should return 10 when five dollars mutiply by 2', () => {
    const five = new Dollar(5)
    let product: Dollar = five.times(2)
    expect(product.amount).toEqual(10)
    product = five.times(3)
    expect(product.amount).toEqual(15)
  })

  test('should return true if dollars of the same value are compared', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true)
    expect(new Dollar(5).equals(new Dollar(10))).toBe(false)
  })
})
