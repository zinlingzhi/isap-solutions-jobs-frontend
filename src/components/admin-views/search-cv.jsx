import * as React from "react";

// components
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

// custom components
import AdminSearchCVFilter from "./components/search-filter";

export default function AdminSearchCV() {
  return (
    <Box sx={{ backgroundColor: "#D9D9D9" }}>
      <Grid container direction="row">
        <Grid item></Grid>
        <Grid item>
          <AdminSearchCVFilter />
        </Grid>
      </Grid>
    </Box>
  );
}
