import React, { useState, useEffect } from "react";
import HeadFilter from "../Component/HeadFilter";
import TableCell from "./TableCell";
import { getValues } from "../../../Helpers/Validation";
// getValues(rowData);
export default function TableRow({ rowData }) {
  const [getValue, setValue] = useState([]);

  useEffect(() => {
    renderCell(rowData);
  }, []);

  const renderCell = async x => {
    let data = [];
    data = await getValues(x);
    setValue(data);
  };

  return (
    <tr>
      {getValue.map((value, i) => {
        return <TableCell value={value} key={i} />;
      })}
    </tr>
  );
}
