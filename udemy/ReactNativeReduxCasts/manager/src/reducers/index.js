import { combineReducers } from 'redux'
import AuthReducer from './AuthReduder'
import EmployeeFormReducer from './EmployeeFormReducer'
import EmployeeListReducer from './EmployeeListReducer'

export default combineReducers({
  auth: AuthReducer,
  employeeForm: EmployeeFormReducer,
  employeeList: EmployeeListReducer
})
