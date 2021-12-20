import { Dollar } from '../src/Dollar'
import { Euro } from '../src/Euro'

describe('Money', () => {
  test.only('should handle dollar multiplication', () => {
    const five = new Dollar(5)
    expect(five.times(2).equals(new Dollar(10))).toBe(true)
    expect(five.times(3).equals(new Dollar(15))).toBe(true)
  })

  test('should handle Euro multiplication', () => {
    const five = new Euro(5)
    expect(five.times(2).equals(new Euro(10))).toBe(true)
    expect(five.times(3).equals(new Euro(15))).toBe(true)
  })

  test('should compare dollars with dollars', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true)
    expect(new Dollar(5).equals(new Dollar(10))).toBe(false)
  })

  test('should compare euros with euros', () => {
    expect(new Euro(5).equals(new Euro(5))).toBe(true)
    expect(new Euro(5).equals(new Euro(10))).toBe(false)
  })

  test('should compare dollars with euros', () => {
    expect(new Dollar(5).equals(new Euro(5))).toBe(false)
  })
})
