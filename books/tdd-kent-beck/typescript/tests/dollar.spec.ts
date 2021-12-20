import { Dollar } from '../src/Dollar'

describe('Dollar', () => {
  test('should return 10 when five dollars mutiply by 2', () => {
    const five = new Dollar(5)
    expect(five.times(2).equals(new Dollar(10))).toBe(true)
    expect(five.times(3).equals(new Dollar(15))).toBe(true)
  })

  test('should return true if dollars of the same value are compared', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true)
    expect(new Dollar(5).equals(new Dollar(10))).toBe(false)
  })
})
