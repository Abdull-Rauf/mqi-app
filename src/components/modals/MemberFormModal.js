import React, { useState } from 'react'
import Axios from "axios";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormComponent from '../form/FormComponent'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import formFields from "../../setting/formfields.json";
import { Toaster } from "../../components/toaster";


const MemberFormModal = props => {

  const [status, setStatus] = useState({
    isError: false,
    message: "",
    isSubmitted: false,
  });


  const [open, setOpen] = useState(false);

  const initialState = {
    membership_type: "",
    membership_no: "",
    personnummer: "",
    name: "",
    mobile: "",
    email: "",
    address: "",

  }
  const [data, setData] = useState(initialState);

  const memebrShipTypes = ['Life Membership', 'Masjid Membership']


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setStatus({ ...status, isError: false, message: "", isSubmitted: false })
    setOpen(false);
    props.getAllMembers()

  }

  const handleChange = (e) => {
    let newData = { ...data, [e.target.name]: e.target.value };
    setData(newData);
  };

  const handleSubmit = (payload) => {

    Axios.post(`https://minhaj.se/app-api/add_member.php`, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        if (res?.data?.db_status) {
          setData(initialState)
          return setStatus({
            isError: false,
            message: "Member inserted successfully!!!",
            isSubmitted: true,
          });
        }
        return setStatus({
          isError: true,
          message: res?.data["0"],
          isSubmitted: false,
        });
      })
      .catch((err) => console.log(err));
  };

  const formData = new FormData();
  formData.append("membership_type", data.membership_type);
  formData.append("membership_no", data.membership_no);
  formData.append("personnummer", data.personnummer);
  formData.append("name", data.name);
  formData.append("mobile", data.mobile);
  formData.append("email", data.email);
  formData.append("address", data.address);



  return (
    <div>
      <Button variant="contained" style={{ marginBottom: '20px' }} onClick={handleClickOpen}>
        + Add New Member
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
          <FormComponent
            fields={formFields.members}
            memberShipTypes={memebrShipTypes}
            type={data.membership_type}
            inputClass="members-form-fields"
            data={formData}
            handleChange={(e) => handleChange(e)}
            action={handleSubmit}
            getValue={name => data[name]}
          />
        </DialogContent>
        {status.isError && <Toaster type="error" message={status.message} />}
        {status.isSubmitted && (
          <Toaster type="success" message={status.message} />
        )}
      </Dialog>
    </div>
  );
}


export default MemberFormModal
