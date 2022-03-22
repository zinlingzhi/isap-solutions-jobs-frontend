import * as React from "react";

// components
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

// icons and logos
import CloseIcon from "@mui/icons-material/Close";
import BackIcon from "@mui/icons-material/KeyboardBackspace";

// custom components
import JobTag from "./job-tag";

export default function JobContainer(props) {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const list = () => (
    <Box
      sx={{ width: 1100 }}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        sx={{ px: 5, py: 10 }}
        spacing={2}
      >
        <Grid item>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ width: 1000 }}
          >
            <Grid item>
              <Typography
                sx={{ fontWeight: 700, fontSize: 18, color: "#3F3F46" }}
              >
                {props.jobname}
              </Typography>
            </Grid>
            <Grid item>
              <IconButton
                onClick={toggleDrawer(false)}
                aria-label="delete"
                size="large"
              >
                <CloseIcon fontSize="inherit" sx={{ color: "#3F3F46" }} />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="row" alignItems="center" spacing={5}>
            <Grid item>
              <JobTag
                time={false}
                value={"£75000 - £85000 per annum + benefits"}
              />
            </Grid>
            <Grid item>
              <JobTag time={false} value={"DevOps Team"} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="row" spacing={5}>
            <Grid item>
              <JobTag time={true} value={props.time} />
            </Grid>
            <Grid item>
              <JobTag time={true} value={"Posted 17 days ago"} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="row" spacing={5}>
            <Grid item>
              <JobTag time={false} value={props.location} />
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container direction="row" alignItems="center" spacing={2}>
            <Grid item>
              <Button
                href="/register-cv"
                variant="contained"
                disableElevation
                sx={{
                  my: 1,
                  borderRadius: 0,
                  height: 40,
                  backgroundColor: "#1D4ED8",
                  textTransform: "none",
                  ":hover": {
                    backgroundColor: "#1D4ED8",
                  },
                  fontSize: 14,
                }}
              >
                Register CV
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={toggleDrawer(false)}
                startIcon={<BackIcon />}
                variant="contained"
                disableElevation
                sx={{
                  my: 1,
                  borderRadius: 0,
                  height: 40,
                  backgroundColor: "#D4D4D4",
                  color: "#3F3F46",
                  textTransform: "none",
                  ":hover": {
                    backgroundColor: "#D4D4D4",
                  },
                  fontSize: 14,
                }}
              >
                Back
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Typography sx={{ fontWeight: 700, fontSize: 18, color: "#A3A3A3" }}>
            Description
          </Typography>
        </Grid>

        <Grid item>
          <Typography sx={{ fontWeight: 500, fontSize: 14, color: "#3F3F46" }}>
            {props.description}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <Paper
      elevation={0}
      square
      sx={{ backgroundColor: "#E5E5E5", px: 3, py: 2 }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid item>
          <Typography sx={{ fontSize: 18, fontWeight: 700, color: "3F3F346" }}>
            {props.jobname}
          </Typography>
        </Grid>
        <Grid item sx={{ my: 1 }}>
          <Grid container direction="row" alignItems="center" spacing={3}>
            <Grid item>
              <JobTag time={true} value={props.time} />
            </Grid>
            <Grid item>
              <JobTag time={false} value={props.location} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 500,
              color: "#A3A3A3",
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
            }}
          >
            {props.description}
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        spacing={2}
      >
        <Grid item>
          <Button
            onClick={toggleDrawer(true)}
            variant="contained"
            disableElevation
            sx={{
              my: 1,
              borderRadius: 0,
              height: 40,
              backgroundColor: "#D4D4D4",
              color: "#3F3F46",
              textTransform: "none",
              ":hover": {
                backgroundColor: "#D4D4D4",
              },
              fontSize: 14,
            }}
          >
            More
          </Button>
          <Drawer anchor={"right"} open={state} onClose={toggleDrawer(false)}>
            {list()}
          </Drawer>
        </Grid>
        <Grid item>
          <Button
            href={`${process.env.PUBLIC_URL}/register-cv`}
            variant="contained"
            disableElevation
            sx={{
              my: 1,
              borderRadius: 0,
              height: 40,
              backgroundColor: "#1D4ED8",
              textTransform: "none",
              ":hover": {
                backgroundColor: "#1D4ED8",
              },
              fontSize: 14,
            }}
          >
            Register CV
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
