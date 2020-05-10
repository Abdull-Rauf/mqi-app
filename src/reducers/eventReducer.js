const initState = {
  events: []
}

const eventReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case 'GET_EVENTS':
      return {
        ...state, events: [payload]
      }
    default:
      return state
  }
}

export default eventReducer