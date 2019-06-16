import { EMAIL_CHANGED, PASSWORD_CHANGED } from './types'

export const emailChange = (payload) => {
  return {
    type: EMAIL_CHANGED,
    payload
  }
}

export const passwordChange = (payload) => {
  return {
    type: PASSWORD_CHANGED,
    payload
  }
}
