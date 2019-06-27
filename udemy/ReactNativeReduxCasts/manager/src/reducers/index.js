import { combineReducers } from 'redux'
import AuthReducer from './AuthReduder'
import EmployeeFormReducer from './EmployeeFormReducer'

export default combineReducers({
  auth: AuthReducer,
  employeeForm: EmployeeFormReducer
})
