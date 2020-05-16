import React from 'react'
import { Card, Button, Typography, Dialog, DialogContent, DialogContentText, DialogActions } from '@material-ui/core'
import { delFeed } from '../../actions/feedAction'
import { connect } from 'react-redux'

function FeedList(props) {

  const [open, setOpen] = React.useState(false);
  const [id, setId] = React.useState('');

  const handleClickOpen = (itemID) => {
    setId(itemID)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (payload) => {
    console.log(payload)
    props.feed(payload);
    setOpen(false);

  };



  const data = props.data[props.dataName].map(item => item)

  return (
    <div>

      {data[0] === undefined ? <Typography> No Feed Found</Typography> : data[0].map((item, i) => {

        return (
          <Card style={{ height: 'auto', width: '90%', marginLeft: 'auto', marginRight: 'auto', marginBottom: 50, padding: 10 }} key={i}>
            <Typography variant='h5'>{item.feed_title}</Typography>
            <br />
            <Typography align='left'>{item.feed_description}</Typography>
            <br />
            <Button variant="outlined" color="primary" onClick={() => handleClickOpen(item.feed_id)}>
              Delete
             </Button>


          </Card>
        )
      }
      )
      }
      <Dialog
        disableBackdropClick
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you really want to delete this feed
                </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
                </Button>
          <Button onClick={() => handleDelete(id)} color="primary" autoFocus>
            Delete
                </Button>
        </DialogActions>
      </Dialog>


    </div>
  )
}


const mapDispatchToProps = dispatch => {

  return {
    feed: data => dispatch(delFeed(data)),

  }
}

export default connect(null, mapDispatchToProps)(FeedList)

