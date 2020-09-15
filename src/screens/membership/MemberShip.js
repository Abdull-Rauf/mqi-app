import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Typography } from '@material-ui/core'
import '../../App.css';
import './membership.css';
import FormComponent from '../../components/form/FormComponent'
import { addFeed, getFeeds } from '../../actions/feedAction'
import { addEvent, getEvents } from '../../actions/eventAction';
import formFields from '../../setting/formfields.json'
import MembersList from '../../components/list/MembersList'




function MemberShip(props) {

  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    telephone: '',
  });



  useEffect(() => {
    props.feeds()

  }, [])
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
  formData.append('firstname', data.name);
  formData.append('lastname', data.lastname);
  formData.append('email', data.email);
  formData.append('telephone', data.telephone);


  return (
    <div className='container membership-container'>
      <div className='member-form'>
        <Typography variant='h5' style={{ marginBottom: 50 }} >Add New Member</Typography>
        <FormComponent
          fields={formFields.members}
          inputClass='members-form-fields'
          data={formData}
          handleChange={(e) => handleChange(e)}
        />
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {

  return {
    feeds: data => dispatch(getFeeds(data)),
    events: data => dispatch(getEvents(data))

  }
}
const mapStateToProps = state => {

  return {
    stateEvents: state.eventReducer,
    stateFeeds: state.feedReducer

  }

}
export default connect(mapStateToProps, mapDispatchToProps)(MemberShip)