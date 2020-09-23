import React from "react";
import { DataTable } from "../../components/dataTable";
import columns from "./memberTable.columns";

function MemberTable(props) {
  const options = {
    filter: true,
    filterType: "dropdown",
    resizableColumns: false,
    responsive: "standard",
    selectableRows: "none",
    draggableColumns: {
      enabled: true,
    },
    expandableRows: false,
  };
  return (
    <DataTable
      title={"Members"}
      data={props.members.map((e) => e)}
      columns={columns}
      options={options}
    />
  );
}

export default MemberTable;
