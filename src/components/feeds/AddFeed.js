import React from 'react'
import { connect } from 'react-redux'
import addFeedAction from '../../actions/feedAction'



function AddFeed(props) {

  return (
    <div>

    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFeed: data => dispatch(addFeedAction(data))
  }
}


export default connect(null, mapDispatchToProps)(AddFeed)
