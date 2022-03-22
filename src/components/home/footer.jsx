import * as React from "react";

// components
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// icons and logos
import logo from "../../assets/logos/bottom-isap-logo.png";

// miscellaneous
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Footer() {
  // create constant to look for changes in the device display size
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        backgroundColor: "#D4D4D4",
        py: 4,
        px: isMobile ? 4 : 15,
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <Grid container direction="row" alignItems="center" spacing={2}>
            <Grid item>
              <img
                alt={"isap-logo"}
                src={logo}
                style={{ borderRight: "1px solid #3F3F46", paddingRight: 20 }}
              />
            </Grid>
            <Grid item>
              <Typography
                sx={{ fontSize: 13, fontWeight: 500, color: "#3F3F46" }}
              >
                Terms and conditions
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{ fontSize: 13, fontWeight: 500, color: "#3F3F46" }}
              >
                Cookie policy
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{ fontSize: 13, fontWeight: 500, color: "#3F3F46" }}
              >
                Sitemap
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography sx={{ fontSize: 13, fontWeight: 500, color: "#3F3F46" }}>
            © 2021 iSAP. All rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
