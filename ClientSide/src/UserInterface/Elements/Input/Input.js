import React, { Fragment, useState, useEffect, useCallback } from "react";
import { maxValue, minValue } from "../../../Helpers/Validation";

const handleError = (validations, value) => {
  console.log(validations, value);
  //   let newError = [];
  //   let prevError = [];
};

export default function Input({ value, onChange, validation }) {
  const handleChange = useCallback(e => {
    console.log(validation);
    let value = e.target.value;
    let name = e.target.name;
    let error = [];
    error = handleError(validation, value);
    onChange(value, name);
  }, []);

  return (
    <Fragment>
      <input
        placeholder="Search here"
        value={value}
        name="name"
        onChange={e => handleChange(e)}
      />
      <p>{value}</p>
    </Fragment>
  );
}
