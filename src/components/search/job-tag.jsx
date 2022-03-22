import * as React from "react";

// components
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TimeIcon from "@mui/icons-material/AccessTimeFilled";
import LocationIcon from "@mui/icons-material/LocationOn";

export default function JobTag(props) {
  return (
    <Grid container direction="row" alignItems="center" spacing={1}>
      <Grid item>
        {props.time ? (
          <TimeIcon sx={{ color: "#A3A3A3", fontSize: 14 }} />
        ) : (
          <LocationIcon sx={{ color: "#A3A3A3", fontSize: 14 }} />
        )}
      </Grid>
      <Grid item>
        <Typography sx={{ fontWeight: 500, fontSize: 14, color: "#3F3F46" }}>
          {props.value}
        </Typography>
      </Grid>
    </Grid>
  );
}
