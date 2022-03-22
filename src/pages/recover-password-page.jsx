import * as React from "react";

// components
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

// custom components
import SimpleAuthNavigationBar from "../components/auth/nav-bar";
import NoAccountPrompt from "../components/auth/no-account";
import Recovery from "../components/auth/recovery";

export default function RecoveryPasswordPage() {
  return (
    <Box sx={{ backgroundColor: "#DBDBDB", height: "100vh", flexGrow: 1 }}>
      <CssBaseline />
      <SimpleAuthNavigationBar />
      <Recovery />
      <NoAccountPrompt />
    </Box>
  );
}
