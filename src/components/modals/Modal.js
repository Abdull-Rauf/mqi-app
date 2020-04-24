import React, { useState, Fragment } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormComponent from '../form/FormComponent'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';


function Modal(props) {

  // console.log('modalProps:', props)


  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    title: '',
    feed: ''
  });


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (e) => {

    const newData = { ...data, [e.target.name]: e.target.value }
    setData(newData)
  };



  const actionName = props.action.name

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
            action={props[actionName]}
            data={data}
            handleChange={(e) => handleChange(e)} />
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
