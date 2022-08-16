import React from "react";
import "./styles.css";
import { CheckCircleOutline, ErrorOutline } from "@mui/icons-material";
import { Card, CardContent, Typography, Chip } from "@mui/material";

type Props = {
  status: any;
};

const StatusCard: React.FC<Props> = ({ status }) => {
  const time = status.time
    ? new Date(status.time).toLocaleTimeString("es-AR", {
        hour12: false,
      })
    : null;
  return (
    <Card sx={{ maxWidth: 240, marginBottom: 2.5, height: 220 }}>
      <CardContent
        sx={{
          height: "88%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Typography sx={{ fontSize: 20, textAlign: "center" }} gutterBottom>
            <strong>{status.service.toUpperCase()}</strong>
          </Typography>
          <Chip
            label={status.message}
            sx={{ fontWeight: "bold", display: "flex" }}
            icon={status.success ? <CheckCircleOutline /> : <ErrorOutline />}
            color={status.success ? "success" : "error"}
            variant="filled"
          />
          {!status.success && (
            <Typography sx={{ marginTop: 1 }} color="red" align="center">
              Service unavailable
            </Typography>
          )}
          {status.hostname && (
            <Typography sx={{ marginTop: 1 }}>
              <strong>Host:</strong> {status.hostname}
            </Typography>
          )}
          {status.version && (
            <Typography color="text.primary" sx={{ fontSize: 14 }}>
              <strong>Version:</strong> {status.version}
            </Typography>
          )}
        </div>
        {time && (
          <Typography gutterBottom color="text.secondary">Last refresh: {time}</Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default StatusCard;
