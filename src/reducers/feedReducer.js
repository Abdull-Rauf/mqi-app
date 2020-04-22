const initState = {
  title: '',
  description: ''
}

const feedReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case 'ADD_FEED':
      return {
        ...state, payload
      }
    default:
      return state
  }
}

export default feedReducer