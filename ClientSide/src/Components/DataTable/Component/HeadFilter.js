import React, { useState, useEffect } from "react";
import { getKeys } from "../../../Helpers/Validation";

export default function HeadFilter({ content }) {
  const [getHeading, setHeading] = useState([]);

  useEffect(() => {
    setHeading(getKeys(content));
  }, []);

  return (
    <tr>
      {getHeading.map((heading, i) => {
        return (
          <td key={i}>
            <div
              style={{
                width: "auto",
                height: "auto",
                display: "flex",
                flexDirection: "row"
              }}
            >
              <div>
                <h6>{i}</h6>
              </div>
              <div style={{ width: "90%" }}>
                <button style={{ width: "100%" }}>
                  <h6>{heading}</h6>
                </button>
              </div>
            </div>
          </td>
        );
      })}
    </tr>
  );
}
