const CalculateBreakTime = require('./CalculateBreakTime')

describe('test calculation of time break', () => {
  it('should return correct break time', () => {
    let rules = [
      { totalTimeInMinutes: 60, break: 10 }, // 80
      { totalTimeInMinutes: 120, break: 5 }, // 20
    ]
    let workingTime = 640

    let result = CalculateBreakTime(workingTime, rules)
    expect(result.realWorkingTime).toEqual(515)
    expect(result.totalBreakTime).toEqual(125)
    expect(result.notCalculatedTime).toEqual(80)
    console.log(result)

  })
})
