module.exports = (workingTime, rules) => {
  let realWorkingTime = workingTime
  let totalBreakTime = 0
  let notCalculatedTime = 0
  rules.map((rule) => {
    let breakTimes = Math.floor(workingTime / rule.totalTimeInMinutes)
    let totalMinutesBreak = breakTimes * rule.break
    totalBreakTime += totalMinutesBreak
    realWorkingTime -= totalMinutesBreak
    notCalculatedTime += workingTime % rule.totalTimeInMinutes
  })

  return {
    realWorkingTime,
    totalBreakTime,
    notCalculatedTime
  }
}
