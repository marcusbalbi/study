import  { FETCH_EMPLOYEES } from '../actions/types'
const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_EMPLOYEES: {
      console.log(action)
      return action.payload
    }
    default: {
      return state
    }
  }
}