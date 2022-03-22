import * as React from "react";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

export default function NoAccountPrompt() {
  return (
    <Grid container direction="row" justifyContent="center">
      <Link color="inherit" href="/sign-up">
        Don't have an account?
      </Link>
    </Grid>
  );
}
