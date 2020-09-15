import React from 'react';
import '../../App.css';
import '../../screens/membership/membership.css'
import { TextField, Button } from '@material-ui/core';


const FormComponent = props => {



  return (
    <form className='form'  >
      {
        props.fields.map((field, index) => {

          return (
            <TextField onChange={props.handleChange} className={props.inputClass} style={{ marginBottom: '10px' }} size={field.size}
              type={field.inputType} name={field.inputName} placeholder={field.placeholder}
              key={index} multiline={field.multiline} rows={field.rows} required variant="outlined"
            />
          )
        })
      }
      < div style={{ display: 'flex', marginTop: 20 }}>

        <Button color='info' variant='contained' className={props.BtnClass} onClick={() => props.action(props.data)}>Submit</Button>

      </div>

    </form >
  );
}

export default FormComponent;