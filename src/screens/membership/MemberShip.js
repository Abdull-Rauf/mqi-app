import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Typography } from '@material-ui/core'
import '../../App.css';
import './membership.css';
import FormComponent from '../../components/form/FormComponent'
import { addMember } from '../../actions/memberAction'
import formFields from '../../setting/formfields.json'




const MemberShip = (props) => {

  const [data, setData] = useState({
    personnummer: '',
    name: '',
    mobile: '',
    email: '',
    address: '',
    membership_type: ''
  });


  const handleChange = (e) => {

    let newData = { ...data, [e.target.name]: e.target.value }
    setData(newData)
  };

  const handleSubmit = payload => {
    props.addMember(payload)
  }


  const formData = new FormData();
  formData.append('personnummer', data.personnummer);
  formData.append('name', data.name);
  formData.append('mobile', data.mobile);
  formData.append('email', data.email);
  formData.append('address', data.address);
  formData.append('membership_type', data.membership_type);


  return (
    <div className='container membership-container'>
      <div className='member-form'>
        <Typography variant='h5' style={{ marginBottom: 50 }} >Add New Member</Typography>
        <FormComponent
          fields={formFields.members}
          inputClass='members-form-fields'
          data={formData}
          handleChange={(e) => handleChange(e)}
          action={handleSubmit}
        />
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {

  return {
    addMember: data => dispatch(addMember(data)),

  }
}

export default connect(null, mapDispatchToProps)(MemberShip)