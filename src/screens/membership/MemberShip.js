import React, { useState, useEffect } from "react";
import "../../App.css";
import "./membership.scss";
import { getMemberListService } from "../../services/member.service";
import MemberTable from "../../features/member";
import MemberFormModal from '../../components/modals/MemberFormModal'

const MemberShip = () => {

  const [members, setMembers] = useState('')

  const [render, setRender] = useState(false)

  const getAllMembers = () => {
    setRender(true)
    const response = getMemberListService();
    return response;
  };

  useEffect(() => {
    getAllMembers()
      .then((res) => setMembers(res?.events))
      .catch((err) => console.log(err));
  }, [members]);




  return (
    <div className="membership">

      <div className="membership__member-table">
        <MemberFormModal getAllMembers={getAllMembers} />
        {Array.isArray(members) && members.length > 0 && <MemberTable members={members} />}
      </div>

    </div>
  );
};


export default MemberShip;
