import * as React from "react";
import axios from "axios";

// components
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// custom components
import JobAd from "../search/job-ad";
import SearchPrompt from "./search";
import FilterSearch from "./filter";
import PaginationC from "./pagination";

export default function SearchMain() {
  // rest api variables
  const [allJobs, setAllJobs] = React.useState([]);

  React.useEffect(() => {
    // get all jobs
    axios
      .get(`https://flasksingintest.azurewebsites.net/getAllJobs`)
      .then((res) => {
        setAllJobs(res.data);
      });
  }, []);

  return (
    <Box>
      <Grid
        container
        direction="row"
        alignItems="flex-start"
        justifyContent="center"
        sx={{ py: 15 }}
        spacing={2}
      >
        <Grid item xs={11} sm={5} md={5} lg={4} xl={2.5}>
          <Grid
            container
            direction="column"
            alignItems="flex-start"
            justifyContent="center"
            spacing={2}
          >
            <Grid item>
              <Typography
                sx={{ fontSize: 18, fontWeight: 800, color: "#3F3F46" }}
              >
                23,447 IT Jobs
              </Typography>
            </Grid>
            <Grid item>
              <SearchPrompt />
            </Grid>
            <Grid item>
              <FilterSearch />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={10} sm={10} md={5} lg={6} xl={7}>
          <Grid
            container
            spacing={{ xs: 2, md: 4 }}
            columns={{ xs: 4, sm: 8, md: 12, lg: 12, xl: 12 }}
          >
            {allJobs.map((job, index) => (
              <Grid item xs={4} sm={8} md={8} lg={6} xl={6} key={index}>
                <JobAd
                  jobname={job.jobname}
                  description={job.description}
                  time={job.time}
                  location={job.location}
                />
              </Grid>
            ))}
          </Grid>
          <PaginationC />
        </Grid>
      </Grid>
    </Box>
  );
}
