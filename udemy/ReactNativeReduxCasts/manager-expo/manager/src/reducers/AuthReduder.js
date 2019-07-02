import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER, LOGIN_USER_FAILED } from "../actions/types";

const INITIAL_STATE = {
  email: 'balbimarcus@gmail.com',
  password: 'abc123',
  user: null,
  error: '',
  loading: false
}
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED: {
      return { ...state, email: action.payload }
    }
    case PASSWORD_CHANGED: {
      return { ...state, password: action.payload }
    }
    case LOGIN_USER_SUCCESS: {
      return { ...INITIAL_STATE, user: action.payload }
    }
    case LOGIN_USER_FAILED: {
      return { ...INITIAL_STATE , error: 'Auth Failed' }
    }
    case LOGIN_USER: {
      return { ...state, error: '', loading: true }
    }
  }
  return state
}