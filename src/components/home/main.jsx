import * as React from "react";

// components
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Main from "../auth/main";

// icons and logos
import logo from "../../assets/logos/home-joy-logo.png";

// miscellaneous
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function HomeMain() {
  // create constant to look for changes in the device display size
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("xl"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ position: "relative" }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        sx={{ px: isMobile ? 4 : 20, paddingTop: 15 }}
      >
        <Grid item>
          <Typography
            sx={{
              fontSize: isMobile ? 40 : 64,
              fontWeight: 800,
              color: "#3F3F46",
            }}
          >
            Find interesting IT
          </Typography>
          <Grid container direction="row" spacing={2}>
            <Grid item>
              <Typography
                sx={{
                  fontSize: isMobile ? 40 : 64,
                  fontWeight: 800,
                  color: "#3F3F46",
                }}
              >
                projects with
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  fontSize: isMobile ? 40 : 64,
                  fontWeight: 800,
                  color: "#1D4ED8",
                }}
              >
                iSAP
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  fontSize: isMobile ? 40 : 64,
                  fontWeight: 800,
                  color: "#3F3F46",
                }}
              >
                jobs
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Main signUp={false} homePage={true} />
        </Grid>
      </Grid>

      {!isTablet ? (
        <>
          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              display: "inline-block",
              width: "811px",
              height: "415px",
              background: "#3F3F46",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -7,
              right: "15%",
            }}
          >
            <img alt={"isap-logo"} src={logo} />
          </div>{" "}
        </>
      ) : (
        <></>
      )}
    </Box>
  );
}
