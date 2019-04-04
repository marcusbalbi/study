export default (state = [], actions) => {
  if (actions.type === 'ADD') {
    return state.concat(actions.payload)
  }
  return state
}