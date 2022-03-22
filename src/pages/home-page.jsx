import * as React from "react";

// components
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

// custom components
import NavigationBar from "../components/home/nav-bar";
import HomeMain from "../components/home/main";
import LatestJobs from "../components/home/latest-jobs";

export default function HomePage() {
  return (
    <Box sx={{ backgroundColor: "#E5E5E5", flexGrow: 1 }}>
      <CssBaseline />
      <NavigationBar />
      <HomeMain />
      <LatestJobs />
    </Box>
  );
}
