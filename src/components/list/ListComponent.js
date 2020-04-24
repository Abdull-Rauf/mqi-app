import React from 'react'
import { connect } from 'react-redux'

function ListComponent(props) {

  console.log(props)

  const data = props.data
  return (
    <div>
      <h1>{data.title}</h1>

    </div>
  )
}

const mapStateToProps = (state, ownProps) => {

  const reducerName = ownProps.reducer.name
  return {

    data: state[reducerName]

  }


}

export default connect(mapStateToProps)(ListComponent)

