import Axios from 'axios';

export const addMember = payload => dispatch => {

  console.log('action')

  Axios.post(`https://minhaj.se/app-api/add_member.php`, payload, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
    .then(res => console.log(res))
    .then(() => dispatch({ type: 'ADD_MEMBER', payload }))
    .catch(err => console.log(err))

}

export const getMembers = () => dispatch => {

  Axios.get(`https://minhaj.se/app-api/get_members.php`)
    .then(res => dispatch({ type: 'GET_MEMBER', payload: res.data.members }))
    .catch(err => console.log(err))
}

// export const delMember = payload => dispatch => {


//   Axios.post(`https://minhaj.se/app-api/delete_member.php`, payload, {

//     headers: {
//       'Content-Type': 'multipart/form-data'
//     }
//   })
//     .then(res => dispatch({ type: 'DEL_MEMBER', payload: res.data.events }))
//     .catch(err => console.log(err))
// }
