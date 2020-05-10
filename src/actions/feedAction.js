import Axios from 'axios';

export const addFeed = payload => dispatch => {

  Axios.post(`https://minhaj.se/app-api/add_feed.php`, payload, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
    .then(res => console.log(res))
    .then(() => dispatch({ type: 'ADD_FEED', payload }))
    .catch(err => console.log(err))

}

export const getFeeds = () => dispatch => {

  Axios.get(`https://minhaj.se/app-api/get_feeds.php`)
    .then(res => dispatch({ type: 'GET_FEEDS', payload: res.data.feeds }))
    .catch(err => console.log(err))
}

export const delFeed = id => dispatch => {

  const formData = new FormData();
  formData.append('feed_id', id)
  console.log(formData.get('feed_id'))
  Axios.post(`https://minhaj.se/app-api/delete_feed.php`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  })
    .then(res => dispatch({ type: 'DEL_FEED', payload: res.data }))
    .catch(err => console.log(err))
}

