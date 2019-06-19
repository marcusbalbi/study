import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS } from './types'
import firebase from 'firebase'

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

export const login = (payload) => {
  return (dispatch) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(result => {
        if (result.user) {
          dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: user
          })
          return result
        }
      })
  }
}
