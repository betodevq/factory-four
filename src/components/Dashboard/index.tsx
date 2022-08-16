import React from "react";
import "./styles.css";
import { Grid } from "@mui/material";
import * as Constants from "../../constants";
import StatusCard from "../StatusCard";
import { useServiceStatus } from "../../hooks/useServiceStatus";

function Dashboard() {
  const data: any[] = useServiceStatus();
  return (
    <>
      <header className="dashboard-header">
        <h1>Status Dashboard</h1>
      </header>
      <div className="dashboard-body">
        <Grid container spacing={0}>
          {!!data.length && data.map((status, idx) => (
            <Grid
              key={idx}
              item
              className="StatusCard-card"
              xs={6}
              sm={3}
              md={2}
            >
              <StatusCard status={status} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}

export default Dashboard;
