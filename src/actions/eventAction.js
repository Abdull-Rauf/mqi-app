import Axios from 'axios';

export const addEvent = payload => dispatch => {

  Axios.post(`https://minhaj.se/app-api/add_event.php`, payload, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
    .then(res => console.log(res))
    .then(() => dispatch({ type: 'ADD_EVENT', payload }))
    .catch(err => console.log(err))

}
export const getEvents = () => dispatch => {

  Axios.get(`https://minhaj.se/app-api/get_events.php`)
    .then(res => dispatch({ type: 'GET_EVENTS', payload: res.data.events }))
    .catch(err => console.log(err))
}

export const delEvents = payload => dispatch => {


  Axios.post(`https://minhaj.se/app-api/delete_event.php`, payload, {

    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
    .then(res => dispatch({ type: 'DEL_EVENTS', payload: res.data.events }))
    .catch(err => console.log(err))
}

