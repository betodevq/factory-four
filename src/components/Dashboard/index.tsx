import React from "react";
import "./styles.css";
import { Grid } from "@mui/material";
import * as Constants from "../../constants";
import StatusCard from "../StatusCard";
import { useServiceStatus } from "../../hooks/useServiceStatus";
import { Typography, Backdrop } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';

function Dashboard() {
  const data: any[] = useServiceStatus();
  return (
    <>
      <header className="dashboard-header">
        <Typography variant="h1" component="div" gutterBottom>
          Service Health Status
        </Typography>
      </header>
      <div className="dashboard-body">
        {data?.length > 0 ? (
          <Grid container columnSpacing={1}>
            {data.map((status, idx) => (
              <Grid
                key={idx}
                item
                className="StatusCard-card"
                xs={6}
                sm={4}
                md={3}
                lg={2}
              >
                <StatusCard status={status} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={data?.length > 0 ? false : true}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        )}
      </div>
    </>
  );
}

export default Dashboard;
