import { Dollar } from '../src/Dollar'

test('should return 10 when five dollars mutiply by 2', () => {
  const five = new Dollar(5)
  five.times(2)
  expect(five.amount).toEqual(10)
})
