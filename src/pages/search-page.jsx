import * as React from "react";

// components
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

// custom components
import LoggedInNavigationBar from "../components/search/nav-bar";
import SearchMain from "../components/search/main";
import Footer from "../components/home/footer";

export default function SearchPage() {
  return (
    <Box sx={{ backgroundColor: "#F5F5F5", flexGrow: 1 }}>
      <CssBaseline />
      <LoggedInNavigationBar />
      <SearchMain />
      <Footer />
    </Box>
  );
}
