import React from "react";
import "./styles.css";
import * as Constants from "../../constants";
import { Grid } from "@mui/material";
import { useServiceStatus } from "../../hooks/useServiceStatus";

type Props = {
  status: any;
};

const StatusCard: React.FC<Props> = ({ status }) => {
  const time = status.time
    ? new Date(status.time).toLocaleTimeString("es-AR", {
        hour12: false,
      })
    : "";
  return (
    <div>
      <p>{status.service}</p>
      <p>{status.message}</p>
      <p>{status.hostname}</p>
      <p>{time}</p>
    </div>
  );
};

export default StatusCard;
