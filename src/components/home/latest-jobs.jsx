import * as React from "react";
import axios from "axios";

// components
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// custom components
import JobAd from "../search/job-ad";
import GetMobileApp from "./mobile-app";
import Footer from "./footer";
import HowTo from "./how-to";
import JobsByShort from "./jobs-by";

// miscellaneous
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function LatestJobs() {
  // create constant to look for changes in the device display size
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // rest api variables
  const [latestJobs, setLatestJobs] = React.useState([]);

  React.useEffect(() => {
    // get all jobs
    axios
      .get(`https://flasksingintest.azurewebsites.net/getAllJobs`)
      .then((res) => {
        setLatestJobs(res.data);
      });
  }, []);

  return (
    <Box sx={{ backgroundColor: "#F5F5F5", position: "relative" }}>
      <Grid
        container
        direction="column"
        alignItems="flex-start"
        sx={{ px: isMobile ? 4 : 20 }}
      >
        <Grid item>
          <Box
            sx={{
              background: "#FFFFFF",
              position: "relative",
              top: -15,
            }}
          >
            <JobsByShort />
          </Box>
        </Grid>
        <Grid item sx={{ paddingTop: 10 }}>
          <Typography sx={{ fontWeight: 800, fontSize: 48, color: "#3F3F46" }}>
            Latest Jobs
          </Typography>
          <Typography sx={{ fontWeight: 800, fontSize: 48, color: "#3F3F46" }}>
            & Projects Exchange
          </Typography>
        </Grid>
        <Grid item sx={{ my: 3 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 4 }}
            columns={{ xs: 4, sm: 8, md: 12, lg: 12, xl: 12 }}
          >
            {latestJobs.slice(0, 6).map((job, index) => (
              <Grid item xs={4} sm={8} md={4} lg={4} xl={4} key={index}>
                <JobAd
                  jobname={job.jobname}
                  description={job.description}
                  time={job.time}
                  location={job.location}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      <Grid container direction="row" justifyContent="center">
        <Grid item>
          <Button
            href={`${process.env.PUBLIC_URL}/search-jobs`}
            variant="contained"
            disableElevation
            sx={{
              borderRadius: 0,
              width: 300,
              height: 60,
              backgroundColor: "#1D4ED8",
              textTransform: "none",
              textAlign: "center",
              ":hover": {
                backgroundColor: "#1D4ED8",
              },
              fontSize: 18,
              fontWeight: 700,
            }}
          >
            Find More
          </Button>
        </Grid>
      </Grid>

      <Grid container direction="row" justifyContent="center">
        <GetMobileApp />
      </Grid>

      <HowTo />
      <Footer />
    </Box>
  );
}
