import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Axios from "axios";
import { Typography, Paper } from "@material-ui/core";
import "../../App.css";
import "./membership.scss";
import FormComponent from "../../components/form/FormComponent";
import { addMember } from "../../actions/memberAction";
import formFields from "../../setting/formfields.json";
import { Toaster } from "../../components/toaster";
import { getMemberListService } from "../../services/member.service";
import MemberTable from "../../features/member";

const MemberShip = (props) => {
  const [status, setStatus] = useState({
    isError: false,
    message: "",
    isSubmitted: false,
  });
  const [members, setMembers] = useState("");
  const [data, setData] = useState({
    membership_no: "",
    personnummer: "",
    name: "",
    mobile: "",
    email: "",
    address: "",
    membership_type: "",
  });

  const getAllMembers = () => {
    const response = getMemberListService();
    return response;
  };
  useEffect(() => {
    getAllMembers()
      .then((res) => setMembers(res?.events))
      .catch((err) => console.log(err));
  }, [props.members]);
  const handleChange = (e) => {
    let newData = { ...data, [e.target.name]: e.target.value };
    setData(newData);
  };

  const handleSubmit = (payload) => {
    // props.addMember(payload)
    // setData(data)

    Axios.post(`https://minhaj.se/app-api/add_member.php`, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        if (res?.data?.db_status) {
          setData({ ...data });
          getAllMembers()
            .then((res) => setMembers(res?.events))
            .catch((err) => console.log(err));
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
  formData.append("membership_no", data.membership_no);
  formData.append("personnummer", data.personnummer);
  formData.append("name", data.name);
  formData.append("mobile", data.mobile);
  formData.append("email", data.email);
  formData.append("address", data.address);
  formData.append("membership_type", data.membership_type);

  return (
    <div className="membership">
      <Paper className="membership__member-form">
        <Typography variant="h5" style={{ marginBottom: 50 }}>
          Add New Member
        </Typography>
        <FormComponent
          fields={formFields.members}
          inputClass="members-form-fields"
          data={formData}
          handleChange={(e) => handleChange(e)}
          action={handleSubmit}
        />
      </Paper>
      <div className="membership__member-table">
        {members.length > 0 && <MemberTable members={members} />}
      </div>
      {status.isError && <Toaster type="error" message={status.message} />}
      {status.isSubmitted && (
        <Toaster type="success" message={status.message} />
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMember: (data) => dispatch(addMember(data)),
  };
};

export default connect(null, mapDispatchToProps)(MemberShip);
