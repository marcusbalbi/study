export default function (state, action) {
  if (action.type === 'BOOK_SELECTED') {
    return action.payload
  }
  return state
}
