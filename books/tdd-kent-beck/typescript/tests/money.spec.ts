import { Bank } from '../src/Bank'
import { Expression } from '../src/Expression'
import { Money } from '../src/Money'

describe('Money', () => {
  test('should handle money multiplication', () => {
    const five: Money = Money.dollar(5)
    expect(five.times(2).equals(Money.dollar(10))).toBe(true)
    expect(five.times(3).equals(Money.dollar(15))).toBe(true)
  })

  test('should compare money', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true)
    expect(Money.dollar(5).equals(Money.dollar(10))).toBe(false)
    expect(Money.dollar(5).equals(Money.euro(5))).toBe(false)
  })

  test('should handle currency', () => {
    expect(Money.dollar(1).getCurrency()).toEqual('USD')
    expect(Money.euro(1).getCurrency()).toEqual('EUR')
  })

  test('should handle simple addition', () => {
    const five = Money.dollar(5)
    const sum: Expression = five.plus(five)
    const bank = new Bank()
    const reduced: Money = bank.reduce(sum, 'USD')
    expect(reduced.equals(Money.dollar(10))).toBe(true)
  })
})
