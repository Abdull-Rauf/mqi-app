import React from "react";
import "../../App.css";
import "./formStyle.css"
import "../../screens/membership/membership.scss";
import { TextField, Button } from "@material-ui/core";

const FormComponent = (props) => {
  return (
    <form className="form">
      <select
        className='membership_list'
        variant='outlined'
        name="membership_type"
        select
        required
        value={props.type}
        onChange={props.handleChange}
      >
        <option value='' >Memebrship Type</option>
        {props.memberShipTypes.map((type, i) => {
          return <option value={type} key={i}>{type}</option>
        })}

      </select>
      <br />
      {props.fields.map((field, index) => {
        return (


          <TextField
            onChange={props.handleChange}
            className={props.inputClass}
            style={{ marginBottom: "10px" }}
            size={field.size}
            type={field.inputType}
            name={field.inputName}
            placeholder={field.placeholder}
            key={index}
            multiline={field.multiline}
            rows={field.rows}
            variant="outlined"
            value={props.getValue(field.inputName)}
          />
        );
      })}
      <div style={{ display: "flex", marginTop: 10 }}>
        <Button
          variant="contained"
          className={props.BtnClass}
          onClick={() => {
            props.action(props.data);
          }}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default FormComponent;
