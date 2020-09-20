const initState = {
  memberData: [],
  isDeleted: false
}


const memberReducer = (state = initState, { type, payload }) => {

  switch (type) {
    case 'GET_MEMBER':
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

export default memberReducer