import { Money } from '../src/Money'

describe('Money', () => {
  test('should handle dollar multiplication', () => {
    const five: Money = Money.dollar(5)
    expect(five.times(2).equals(Money.dollar(10))).toBe(true)
    expect(five.times(3).equals(Money.dollar(15))).toBe(true)
  })

  test('should handle Euro multiplication', () => {
    const five = Money.euro(5)
    expect(five.times(2).equals(Money.euro(10))).toBe(true)
    expect(five.times(3).equals(Money.euro(15))).toBe(true)
  })

  test('should compare dollars with dollars', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true)
    expect(Money.dollar(5).equals(Money.dollar(10))).toBe(false)
  })

  test('should compare euros with euros', () => {
    expect(Money.euro(5).equals(Money.euro(5))).toBe(true)
    expect(Money.euro(5).equals(Money.euro(10))).toBe(false)
  })

  test('should compare dollars with euros', () => {
    expect(Money.dollar(5).equals(Money.euro(5))).toBe(false)
  })

  test('should correcly handle currency', () => {
    expect(Money.dollar(1).getCurrency()).toEqual('USD')
    expect(Money.euro(1).getCurrency()).toEqual('EUR')
  })
})
