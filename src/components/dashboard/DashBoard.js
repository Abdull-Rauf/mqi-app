import React from 'react'
import { Typography } from '@material-ui/core'
import '../../App.css';
import Modal from '../modals/Modal'
import { addFeed } from '../../actions/feedAction'
import { addEvent } from '../../actions/eventAction';
import formFields from '../../setting/formfields.json'
import ListComponent from '../list/ListComponent'
import feedReducer from '../../reducers/feedReducer'
import eventReducer from '../../reducers/eventReducer'



export default function DashBoard() {





  return (
    <div className='dashboard'>
      <div className='feeds-list'>
        <div className='list-header'>
          <Typography variant='h5'>All Feeds</Typography>
          <Modal action={addFeed} title='New Feed' formFields={formFields.feeds} />

        </div>
        <ListComponent reducer={feedReducer} />
      </div>
      <div className='events-list'>
        <div className='list-header'>
          <Typography variant='h5'>Upcoming Events</Typography>
          <Modal title='New Event' action={addEvent} formFields={formFields.events} />

        </div>
        <ListComponent reducer={eventReducer} />
      </div>
    </div>
  )
}
