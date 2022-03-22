import * as React from "react";

// components
import Pagination from "@mui/material/Pagination";
import Grid from "@mui/material/Grid";

export default function PaginationC() {
  return (
    <Grid container direction="row" justifyContent="center" sx={{ my: 4 }}>
      <Grid item>
        <Pagination count={10} variant="outlined" shape="rounded" />
      </Grid>
    </Grid>
  );
}
