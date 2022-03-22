import * as React from "react";
// components
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

// icons and logo
import SearchIcon from "@mui/icons-material/Search";
import ProjectIcon from "@mui/icons-material/AccountTree";

// miscellaneous
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function DashboardViewCV() {
  // create constant to look for changes in the device display size
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      sx={{ paddingTop: 10 }}
    >
      <Grid item>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Typography
              sx={{ fontSize: 64, fontWeight: "bold", color: "#3F3F46" }}
            >
              Welcome
            </Typography>
          </Grid>
          <Grid item sx={{ marginTop: 2 }}>
            <Typography
              sx={{ fontSize: 18, fontWeight: 500, color: "#3F3F46" }}
            >
              to iSAP Jobs
            </Typography>
          </Grid>
          <Grid item sx={{ marginTop: 3 }}>
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 500,
                color: "#3F3F46",
                textAlign: "center",
              }}
            >
              The world's leading platfrom for outsourcing and hiring IT
              specialists!
            </Typography>
          </Grid>
          <Grid item sx={{ marginTop: 7 }}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={4}
            >
              <Grid item>
                <Button
                  sx={{
                    borderRadius: 0,
                    px: isMobile ? 4 : 7,
                    backgroundColor: "#3F3F46",
                    color: "white",
                    textTransform: "none",
                    textAlign: "center",
                    ":hover": {
                      backgroundColor: "#3F3F46",
                    },
                    fontSize: 18,
                  }}
                  startIcon={<SearchIcon />}
                >
                  Search CV
                </Button>
              </Grid>
              <Grid item>
                <Button
                  sx={{
                    borderRadius: 0,
                    px: isMobile ? 2 : 5,
                    backgroundColor: "#1D4ED8",
                    color: "white",
                    textTransform: "none",
                    textAlign: "center",
                    ":hover": {
                      backgroundColor: "#1D4ED8",
                    },
                    fontSize: 18,
                  }}
                  startIcon={<ProjectIcon />}
                >
                  Create project
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
