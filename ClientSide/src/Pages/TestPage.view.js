import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import DataTable from "../Components/DataTable";
import TableRow from "../Components/DataTable/Elements/TableRow";
import { data } from "../Components/DataTable/constants";
import TodoInput from "../Components/Todo/TodoInput";

function TestPageview({ tabledata }) {
  const [getValue, setValue] = useState("");

  const onChange = useCallback((value, name) => {
    setValue(value);
    console.log(name);
  }, []);

  return (
    <div>
      <DataTable>
        {tabledata.map((data, i) => (
          <TableRow rowData={data} key={i} />
        ))}
      </DataTable>
    </div>
  );
}

TestPageview.propTypes = {};

TestPageview.defaultProps = {
  tabledata: data
};

export default TestPageview;
