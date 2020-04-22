import React from 'react'
import { Typography } from '@material-ui/core'
import '../../App.css';

export default function DashBoard() {
  return (
    <div className='dashboard'>
      <div className='feeds-list'>
        <Typography variant='h5'>All Feeds</Typography>

      </div>
      <div className='events-list'>
        <Typography variant='h5'>Upcoming Events</Typography>
      </div>
    </div>
  )
}
