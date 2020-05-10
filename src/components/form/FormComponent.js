import React from 'react';
import '../../App.css';
import { TextField, Button, Divider } from '@material-ui/core';


const FormComponent = props => {



  return (
    <form className='form'  >
      {
        props.fields.map((field, index) => {

          return (
            <TextField onChange={props.handleChange} className={props.inputClass} size={field.size}
              type={field.inputType} name={field.inputName} placeholder={field.placeholder}
              key={index} multiline={field.multiline} rows={field.rows} required
            />
          )
        })
      }
      < div style={{ display: 'flex', marginTop: 20 }}>

        <Button color='primary' variant='contained' className={props.BtnClass} onClick={() => props.action(props.data)}>Submit</Button>

      </div>

    </form >
  );
}

export default FormComponent;