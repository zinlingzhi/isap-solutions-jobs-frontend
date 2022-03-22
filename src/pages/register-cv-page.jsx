import * as React from "react";

// components
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

// custom components
import LoggedInNavigationBar from "../components/search/nav-bar";

import Footer from "../components/home/footer";
import RegisterCVMain from "../components/cv-registration/main";

export default function RegisterCVPage() {
  return (
    <Box sx={{ backgroundColor: "#F5F5F5", flexGrow: 1 }}>
      <CssBaseline />
      <LoggedInNavigationBar />
      <RegisterCVMain />
      <Footer />
    </Box>
  );
}
