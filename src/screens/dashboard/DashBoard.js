import React from 'react'
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './dashboard.css';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import CommentIcon from '@material-ui/icons/Comment';






const DashBoard = () => {


  return (
    <div className='container'>
      <div>
        <Typography variant='h4' >Choose Application</Typography>
      </div>

      <div className='apps-list'>
        <section>
          <Link to='/membership' className='link' ><PeopleAltIcon /> Membership </Link>
        </section>
        <section>
          <Link to='/feeds' className='link' ><CommentIcon /> Feeds & Posters </Link>
        </section>
      </div>


    </div>
  )
}

export default DashBoard;