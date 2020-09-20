import React, { useState } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormComponent from '../form/FormComponent'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';


function Modal(props) {

  const actionName = props.action.name
  const action = props[actionName]

  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    title: '',
    feed: '',
    valid_till: '',
    country: 'SE',
    image: []
  });



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (pl) => {
    console.log(pl)
    action(pl);
    setOpen(false);

  }
  const handleChange = (e) => {
    let newData;
    if (e.target.name === 'image') {
      newData = { ...data, image: [...data.image, e.target.files[0]] }

    } else {
      newData = { ...data, [e.target.name]: e.target.value }

    }

    setData(newData)
  };


  const formData = new FormData();
  formData.append('title', data.title);
  formData.append('feed', data.feed);
  formData.append('date', data.valid_till);
  formData.append('country', data.country);
  formData.append('image', data.image[0])



  return (
    <div>
      <Button color="primary" onClick={handleClickOpen}>
        + {props.title}
      </Button>

      <Dialog open={open} disableBackdropClick fullWidth maxWidth='sm'
        onClose={handleClose} aria-labelledby="form-dialog-title"
      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
          <Button color="primary" onClick={handleClose}>
            <CloseOutlinedIcon />
          </Button>
        </div>
        <DialogContent>
          <FormComponent fields={props.formFields} close={handleClose}
            action={handleClose}
            data={formData}
            handleChange={(e) => handleChange(e)}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}


const mapDispatchToProps = (dispatch, ownProps) => {

  // console.log('ownProps:', ownProps)


  const actionName = ownProps.action.name
  const action = ownProps.action

  return {
    [actionName]: data => dispatch(action(data))

  }
}
export default connect(null, mapDispatchToProps)(Modal)
