import * as React from "react";

// components
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

// custom components
import SignUpForm from "./signup-form";
import SignInForm from "./signin-form";
import AutheticationPage from "../../pages/authentication-page";
import { useNavigate } from "react-router-dom";

// miscellaneous
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Main(props) {
  // create constant to look for changes in the device display size
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  let navigate = useNavigate();
  // modal settings
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    navigate("/sign-up");
  };
  const handleClose = () => setOpen(false);
  // false for sign in, true for sign up
  const [authType, setAuthType] = React.useState(props.signUp);

  return (
    <Grid container direction="row" justifyContent="center">
      <Paper
        variant="outlined"
        square
        sx={{
          boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.1)",
          marginTop: props.homePage ? 4 : 10,
          marginBottom: 4,
          px: 2,
          width: isMobile ? "100%" : 450,
        }}
      >
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{ paddingTop: 2 }}
        >
          <Grid item xs={6}>
            <Button
              onClick={() => setAuthType(false)}
              variant="contained"
              disableElevation
              sx={{
                borderRadius: 0,
                width: "100%",
                height: 50,
                backgroundColor: !authType ? "#1D4ED8" : "#E5E5E5",
                color: authType ? "#3F3F46" : "#FFFFFF",
                textTransform: "none",
                ":hover": {
                  backgroundColor: !authType ? "#1D4ED8" : "#E5E5E5",
                },
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              Sign In
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              onClick={handleOpen}
              variant="contained"
              disableElevation
              sx={{
                borderRadius: 0,
                width: "100%",
                height: 50,
                backgroundColor: authType ? "#1D4ED8" : "#E5E5E5",
                color: !authType ? "#3F3F46" : "#FFFFFF",
                textTransform: "none",
                ":hover": {
                  backgroundColor: authType ? "#1D4ED8" : "#E5E5E5",
                },
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              Sign Up
            </Button>
            <Modal open={open} onClose={handleClose}>
              <AutheticationPage />
            </Modal>
          </Grid>
        </Grid>

        {authType ? <SignUpForm /> : <SignInForm />}
      </Paper>
    </Grid>
  );
}
