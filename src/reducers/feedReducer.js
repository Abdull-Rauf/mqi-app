const initState = {
  title: '',
  feed: ''
}

const feedReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case 'ADD_FEED':
      return {
        ...state, title: payload.title, feed: payload.feed
      }
    default:
      return state
  }
}

export default feedReducer