const initState = {
  feeds: [],
  isDeleted: false
}


const feedReducer = (state = initState, { type, payload }) => {

  switch (type) {
    case 'GET_FEEDS':
      return {
        ...state, feeds: [payload]
      }
    case 'DEL_FEEDS':
      return {
        ...state, isDeleted: !state.isDeleted
      }
    default:
      return state
  }
}

export default feedReducer