
module.exports = (user) => {
  if (!user) {
    throw new Error('Empty User')
  } else if (user.email.trim().length === 0) {
    throw new Error('Email is Required')
  } else if (user.password.trim().length === 0) {
    throw new Error('Password is required')
  }
  return true
}