import * as React from "react";

// components
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// icons and logos
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import logo from "../../assets/logos/mobile-logo.png";

// miscellaneous
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function GetMobileApp() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("xl"));

  return (
    <Paper
      elevation={0}
      square
      sx={{
        background: "#D4D4D4",
        width: 1400,
        my: 30,
      }}
    >
      {!isTablet ? (
        <div
          style={{
            position: "absolute",
            left: "5%",
          }}
        >
          <img alt={"mobile-logo"} src={logo} />
        </div>
      ) : (
        <></>
      )}

      <Grid container direction="row" justifyContent="flex-end">
        <Grid item sx={{ my: 3, mx: 10 }}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Grid item>
              <Typography
                sx={{ fontWeight: 800, fontSize: 72, color: "#3F3F46" }}
              >
                It's even easier
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{ fontWeight: 800, fontSize: 18, color: "#3F3F46" }}
              >
                Get our APP right now
              </Typography>
            </Grid>
            <Grid item sx={{ my: 4 }}>
              <Grid container direction="row" alignItems="center" spacing={2}>
                <Grid item>
                  <Button
                    variant="contained"
                    sx={{
                      elevation: 0,
                      width: 160,
                      textTransform: "none",
                      background: "#3F3F46",
                      ":hover": {
                        background: "#3F3F46",
                      },
                    }}
                    startIcon={<AppleIcon />}
                  >
                    <Grid
                      container
                      direction="column"
                      justifyContent="center"
                      alignItems="flex-start"
                    >
                      <Grid item>
                        <Typography sx={{ fontWeight: 800, fontSize: 10 }}>
                          Available on the
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography sx={{ fontWeight: 800, fontSize: 18 }}>
                          App Store
                        </Typography>
                      </Grid>
                    </Grid>
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    sx={{
                      elevation: 0,
                      width: 180,
                      textTransform: "none",
                      background: "#3F3F46",
                      ":hover": {
                        background: "#3F3F46",
                      },
                    }}
                    startIcon={<GoogleIcon />}
                  >
                    <Grid
                      container
                      direction="column"
                      justifyContent="center"
                      alignItems="flex-start"
                    >
                      <Grid item>
                        <Typography sx={{ fontWeight: 500, fontSize: 10 }}>
                          GET IT ON
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography sx={{ fontWeight: 800, fontSize: 18 }}>
                          Google Play
                        </Typography>
                      </Grid>
                    </Grid>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
