import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Typography } from '@material-ui/core'
import '../../App.css';
import Modal from '../modals/Modal'
import { addFeed, getFeeds } from '../../actions/feedAction'
import { addEvent, getEvents } from '../../actions/eventAction';
import formFields from '../../setting/formfields.json'
import FeedList from '../list/FeedList'
import EventsList from '../list/EventsList'





function DashBoard(props) {

  useEffect(() => {
    props.feeds()
    props.events()

  }, [])



  return (
    <div className='dashboard'>
      <div className='feeds-list'>
        <div className='list-header'>

          <Typography variant='h5' style={{ marginBottom: 50 }} >All Feeds</Typography>
          <Modal action={addFeed} title='New Feed' formFields={formFields.feeds} />

        </div>
        <FeedList data={props.stateFeeds} dataName='feeds' />
      </div>
      <div className='events-list'>
        <div className='list-header'>
          <Typography variant='h5' style={{ marginBottom: 50 }}>Upcoming Events</Typography>
          <Modal title='New Event' action={addEvent} formFields={formFields.events} />

        </div>
        <EventsList data={props.stateEvents} dataName='events' />
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {

  return {
    feeds: data => dispatch(getFeeds(data)),
    events: data => dispatch(getEvents(data))

  }
}
const mapStateToProps = state => {

  return {
    stateEvents: state.eventReducer,
    stateFeeds: state.feedReducer

  }

}
export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)