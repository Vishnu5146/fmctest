import React, { Fragment } from "react";
import useValidate from "./Formic.helper";
import { stateSchema } from "./Formic.constants";

export default function Formic() {
  const { onChange, getValue, getError, getDirty } = useValidate(stateSchema);
  return (
    <Fragment>
      <div>
        <h6>First Name:{getValue.firstName}</h6>
        <input
          placeholder="Enter Value"
          name="firstName"
          value={getValue.firstName}
          onChange={onChange}
        />
        {getError.firstName && getDirty.firstName && (
          <p>{getError.firstName}</p>
        )}
      </div>
      <div>
        <h6>Second Name:{getValue.lastName}</h6>
        <input
          placeholder="Enter Value"
          name="lastName"
          value={getValue.lastName}
          onChange={onChange}
        />
        {getError.lastName && getDirty.lastName && <p>{getError.lastName}</p>}
      </div>
    </Fragment>
  );
}
