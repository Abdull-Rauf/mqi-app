const initState = {
  title: '',
  description: '',
  valid_until: '',
  event_image: ''
}

const eventReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case 'ADD_EVENT':
      return {
        ...state, payload
      }
    default:
      return state
  }
}

export default eventReducer