import * as React from "react";

// components
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

// custom components
import SimpleAuthNavigationBar from "../components/auth/nav-bar";
import Main from "../components/auth/main";
import NoAccountPrompt from "../components/auth/no-account";

export default function AutheticationPage() {
  return (
    <Box sx={{ backgroundColor: "#DBDBDB", height: "100vh", flexGrow: 1 }}>
      <CssBaseline />
      <SimpleAuthNavigationBar />
      <Main signUp={true} homePage={false} />
      <NoAccountPrompt />
    </Box>
  );
}
