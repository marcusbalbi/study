import { combineReducers } from 'redux'
import BookReducer from './BookReducer'
import ActiveBookReducer from './ActiveBookReducer'

const RootReducers = combineReducers({
  books: BookReducer,
  activeBook: ActiveBookReducer
})

export default RootReducers