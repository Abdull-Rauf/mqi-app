import React from 'react'
import { connect } from 'react-redux'
import addEventAction from '../../actions/eventAction'

function AddEvent() {
  return (
    <div>

    </div>
  )
}


const mapDispatchToProps = dispatch => {

  return {
    addEvent: data => dispatch(addEventAction(data))
  }
}



export default connect(null, mapDispatchToProps)(AddEvent)
