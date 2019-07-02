import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE, SELECT_EMPLOYEE, RESET_EMPLOYEE } from '../actions/types'

const INITIAL_STATE = {
  id: null,
  name: '',
  phone: '',
  shift: ''
}
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE: {
      return { ...state, [action.payload.prop]: action.payload.value }
    }
    case EMPLOYEE_CREATE: {
      return INITIAL_STATE
    }
    case SELECT_EMPLOYEE: {
      return action.payload
    }
    case RESET_EMPLOYEE: {
      return {...INITIAL_STATE}
    }
    default: {
      return state
    }
  }
}
