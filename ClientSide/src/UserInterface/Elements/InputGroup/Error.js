import React, { useState, useEffect } from "react";

export default function Error({ errors }) {
  useEffect(() => {}, [errors]);
  return errors.map((error, i) => (
    <p key={i} style={{ color: "red", fontSize: 8 }}>
      {error}
    </p>
  ));
}
