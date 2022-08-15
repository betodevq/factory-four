import React from "react";
import "./styles.css";
import * as Constants from "../../constants";
import StatusCard from "../StatusCard";

function Dashboard() {
  return (
    <div className="dashboard-body">
      <StatusCard />
    </div>
  );
}

export default Dashboard;
