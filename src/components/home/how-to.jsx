import * as React from "react";

// components
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";

import ResumeIcon from "@mui/icons-material/ContactPage";
import SearchIcon from "@mui/icons-material/Search";
import CheckIcon from "@mui/icons-material/CheckCircleOutline";

// miscellaneous
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function HowTo() {
  // create constant to look for changes in the device display size
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ backgroundColor: "#E5E5E5", py: 2 }}>
      <Grid container direction="row" justifyContent="center">
        <Grid item>
          <Typography
            sx={{
              fontSize: isMobile ? 40 : 64,
              fontWeight: 800,
              color: "#3F3F46",
            }}
          >
            How it works
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{ my: 5, px: isSM ? 4 : 20 }}
        spacing={5}
      >
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Grid container direction="column" alignItems="flex-start">
            <Grid item>
              <Badge badgeContent={1} color="primary">
                <ResumeIcon sx={{ fontSize: isMobile ? 35 : 70 }} />
              </Badge>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
                spacing={2}
              >
                <Grid item>
                  <Typography
                    sx={{
                      fontSize: isMobile ? 20 : 24,
                      fontWeight: 800,
                      color: "#3F3F46",
                    }}
                  >
                    Register your CV on iSAP Job
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    sx={{ fontSize: 14, fontWeight: 500, color: "#3F3F46" }}
                  >
                    We have a special functionality for registration and CV
                    creation
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Grid container direction="column" alignItems="flex-start">
            <Grid item>
              <Badge badgeContent={2} color="primary">
                <SearchIcon sx={{ fontSize: isMobile ? 35 : 70 }} />
              </Badge>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
                spacing={2}
              >
                <Grid item>
                  <Typography
                    sx={{
                      fontSize: isMobile ? 20 : 24,
                      fontWeight: 800,
                      color: "#3F3F46",
                    }}
                  >
                    AI will search for the best Projects for you
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    sx={{ fontSize: 14, fontWeight: 500, color: "#3F3F46" }}
                  >
                    We will find the best offers that will suit your skills
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Grid container direction="column" alignItems="flex-start">
            <Grid item>
              <Badge badgeContent={3} color="primary">
                <CheckIcon sx={{ fontSize: isMobile ? 35 : 70 }} />
              </Badge>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
                spacing={2}
              >
                <Grid item>
                  <Typography
                    sx={{
                      fontSize: isMobile ? 20 : 24,
                      fontWeight: 800,
                      color: "#3F3F46",
                    }}
                  >
                    Get a dream job
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    sx={{ fontSize: 14, fontWeight: 500, color: "#3F3F46" }}
                  >
                    Choose a job that suits you
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
