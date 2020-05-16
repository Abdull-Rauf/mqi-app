import React from 'react'
import { Card, CardMedia, Button, Dialog, DialogContent, DialogContentText, DialogActions, Typography } from '@material-ui/core'
import { delEvents } from '../../actions/eventAction'
import { connect } from 'react-redux'


function EventsList(props) {


  const [open, setOpen] = React.useState(false);
  const [id, setId] = React.useState('');
  const [imageName, setImageName] = React.useState('');

  const handleClickOpen = (itemId, image) => {
    setId(itemId);
    setImageName(image)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = (id, url) => {
    const formData = new FormData()
    formData.append('event_id', id)
    formData.append('url', url)

    props.delete(formData)
    setOpen(false);
  };


  const data = props.data[props.dataName].map(item => item)
  return (
    <div>

      {data[0] === undefined ? <Typography> No Event Found</Typography> : data[0].map((item, i) => {


        return (
          <Card style={{ height: 'auto', width: '95%', marginLeft: 'auto', marginRight: 'auto', marginBottom: 50, padding: 10 }} key={i}>

            <CardMedia image={item.image_url} style={{ minHeight: '50vh', width: '90%' }} alt='poster' />
            <br />
            <Button variant="outlined" color="primary" onClick={() => handleClickOpen(item.event_id, item.image_name)}>
              Delete
             </Button>


          </Card>
        )
      }
      )}
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
          <Button onClick={() => handleDelete(id, imageName)} color="primary" autoFocus>
            Delete
                </Button>
        </DialogActions>
      </Dialog>


    </div>
  )
}

const mapDispatchToProps = dispatch => {

  return {
    delete: data => dispatch(delEvents(data)),

  }
}

export default connect(null, mapDispatchToProps)(EventsList)
