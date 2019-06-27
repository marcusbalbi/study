import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER, LOGIN_USER_FAILED } from './types'
import { Actions } from 'react-native-router-flux'
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
    dispatch({ type: LOGIN_USER })
    return firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(result => {
        if (result.user) {
          Actions.main()
          dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: result.user
          })
          return result
        }
      })
      .catch(pErr => {
        return firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
          .then(result => {
            if (result.user) {
              Actions.main()
              dispatch({
                type: LOGIN_USER_SUCCESS,
                payload: result.user
              })
              return result
            }
          })
          .catch((pErr) => {
            dispatch({ type: LOGIN_USER_FAILED })
          })
      })
  }
}
