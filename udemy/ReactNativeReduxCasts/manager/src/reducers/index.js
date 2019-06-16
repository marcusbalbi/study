import { combineReducers } from 'redux'
import AuthReducer from './AuthReduder'

export default combineReducers({
  auth: AuthReducer
})
