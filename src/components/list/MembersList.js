import React from 'react'
import { Card, Button, Typography, Dialog, DialogContent, DialogContentText, DialogActions } from '@material-ui/core'
import { connect } from 'react-redux'

export default function MembersList(props) {

  const data = [
    {
      name: "Abdul Rauf",
      age: 36
    },
    {
      name: "Farhan",
      age: 36
    }
  ]



  return (
    <div>

      {data[0] === undefined ? <Typography> No Feed Found</Typography> : data.map((item, i) => {

        return (
          <Card style={{ height: 'auto', width: '90%', marginLeft: 'auto', marginRight: 'auto', marginBottom: 50, padding: 10 }} key={i}>
            <Typography variant='h5'>{item.name}</Typography>
            <br />
            <Typography align='left'>{item.age}</Typography>
            <br />
          </Card>
        )
      }
      )
      }


    </div>
  )
}


