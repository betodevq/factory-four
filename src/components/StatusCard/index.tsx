import React from "react";
import "./styles.css";
import * as Constants from "../../constants";

function StatusCard() {
  return (
    <>
      {Constants.MODULES.map((module) => (
        <div className="StatusCard">
          <p>{module}</p>
        </div>
      ))}
    </>
  );
}

export default StatusCard;
