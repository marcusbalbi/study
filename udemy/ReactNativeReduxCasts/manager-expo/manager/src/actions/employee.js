import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  FETCH_EMPLOYEES,
  RESET_EMPLOYEE,
  SELECT_EMPLOYEE
} from './types'

export const updateEmployee = (prop, value) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  }
}

export const saveEmployee = ({name, phone, shift}) => {
  const { currentUser } = firebase.auth()
  return dispatch => {
    firebase.database().ref(`users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE })
        Actions.employeeList({ type: 'reset' })
      })
  }
}

export const fetchEmployees = () => {
  const { currentUser } = firebase.auth()
  return dispatch => {
    return firebase.database().ref(`users/${currentUser.uid}/employees`)
      .on('value', (snp) => {
        let data = snp.val()
        if (data) {
          dispatch({ type: FETCH_EMPLOYEES, payload: data })
        }
        return data
      })
  }
}

export const selectEmployee = (employee) => {
  Actions.employeeUpdate()
  return {
    type: SELECT_EMPLOYEE,
    payload: employee
  }
}

export const resetEmployee = () => {
  return {
    type: RESET_EMPLOYEE
  }
}