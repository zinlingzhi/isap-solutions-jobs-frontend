// react
import * as React from "react";

// components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

// icons and logos
import BackIcon from "@mui/icons-material/KeyboardBackspace";
import logo from "../../assets/logos/isap-logo.png";

// miscellaneous
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function SimpleAuthNavigationBar() {
  // create constant to look for changes in the device display size
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // user interface
  return (
    <Box sx={{ flexGrow: 1, maxHeight: 20 }}>
      <AppBar
        position="static"
        elevation={0}
        sx={{ backgroundColor: "transparent", py: 1, px: isTablet ? 0 : 15 }}
      >
        <Toolbar>
          <Grid container direction="row" alignItems="center">
            <Grid item>
              {isMobile ? (
                <IconButton
                  href={`${process.env.PUBLIC_URL}/`}
                  disableElevation
                  sx={{
                    color: "#A3A3A3",
                    fontWeight: "bold",
                    textTransform: "none",
                    fontSize: 20,
                  }}
                >
                  <BackIcon
                    sx={{ fontWeight: "700", fontSize: 16, lineHeight: 20 }}
                  />
                </IconButton>
              ) : (
                <Button
                  href={`${process.env.PUBLIC_URL}/`}
                  disableElevation
                  startIcon={
                    <BackIcon
                      sx={{ fontWeight: "700", fontSize: 16, lineHeight: 20 }}
                    />
                  }
                  sx={{
                    color: "#A3A3A3",
                    fontWeight: "bold",
                    textTransform: "none",
                    fontSize: 20,
                  }}
                >
                  Back to Home
                </Button>
              )}
            </Grid>
            <Grid
              item
              sx={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <img
                alt={"isap-logo"}
                src={logo}
                width="100%"
                sx={{
                  textAlign: "center",
                }}
              />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
