import * as React from "react";

// components
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// icons and logos
import CheckIcon from "@mui/icons-material/Check";

export default function ThankYou() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        sx={{ paddingTop: 15 }}
      >
        <Grid item>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: 17,
              fontWeight: 800,
              color: "#3F3F46",
              marginBottom: 2,
              px: 100,
            }}
          >
            Thank you, we have received your cv
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              fontSize: 14,
              fontWeight: 500,
              color: "#3F3F46",
              marginBottom: 2,
              px: 60,
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="center"
        sx={{ paddingTop: 2 }}
      >
        <Grid item>
          <CheckIcon sx={{ fontSize: 150 }} />
        </Grid>
      </Grid>

      <Grid container direction="row" justifyContent="center">
        <Grid item>
          <Button
            href={`${process.env.PUBLIC_URL}/search-jobs`}
            variant="contained"
            disableElevation
            sx={{
              marginTop: 1,
              marginBottom: 45,
              borderRadius: 0,
              width: 140,
              height: 40,
              backgroundColor: "#1D4ED8",
              textTransform: "none",
              ":hover": {
                backgroundColor: "#1D4ED8",
              },
              fontSize: 16,
            }}
          >
            View CV
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
