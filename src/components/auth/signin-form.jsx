import * as React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// components
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

// icons
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleSignInUpButton from "./google-signIn";

// miscellaneous
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function SignInForm() {
  let navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const signInManually = () => {
    // axios call & body
    const body = {
      email: email,
      pass: password,
    };

    console.log(body);

    axios
      .post(`https://flasksingintest.azurewebsites.net/signin`, body)
      .then((res) => {
        console.log(res);
        navigate(`${process.env.PUBLIC_URL}/sign-up`);
      });
  };

  return (
    <Box sx={{ px: 4, py: 2 }}>
      <Grid container direction="column" alignItems="center">
        <TextField
          required
          fullWidth
          id="email-signin"
          label="Email"
          variant="standard"
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          required
          fullWidth
          id="password-required"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          onChange={(event) => setPassword(event.target.value)}
        />

        <Grid item>
          <Button
            onClick={signInManually}
            variant="contained"
            disableElevation
            sx={{
              marginTop: 4,
              marginBottom: 2,
              borderRadius: 0,
              width: "100%",
              height: 40,
              backgroundColor: "#1D4ED8",
              textTransform: "none",
              ":hover": {
                backgroundColor: "#1D4ED8",
              },
              fontSize: 16,
            }}
          >
            Sign In
          </Button>
        </Grid>

        <Grid item>
          <Link
            href={`${process.env.PUBLIC_URL}/recover-password`}
            underline="none"
            sx={{
              fontWeight: 500,
              fontSize: 14,
              color: "#3F3F46",
              cursor: "pointer",
            }}
          >
            Forgot Password?
          </Link>
        </Grid>

        <Grid item sx={{ width: "100%" }}>
          <Divider spacing={1} sx={{ marginTop: 3 }}>
            <Typography
              sx={{ fontWeight: "normal", fontSize: 15, color: "gray" }}
            >
              OR
            </Typography>
          </Divider>
        </Grid>

        <GoogleSignInUpButton exists={true} />

        <Button
          variant="contained"
          disableElevation
          startIcon={<AppleIcon />}
          sx={{
            my: 1.5,
            borderRadius: 0,
            width: "100%",
            height: 40,
            backgroundColor: "#A3A3A3",
            textTransform: "none",
            ":hover": {
              backgroundColor: "#A3A3A3",
            },
            fontSize: 16,
          }}
        >
          {isMobile ? "Sign In" : "Sign In with Apple"}
        </Button>

        <Button
          variant="contained"
          disableElevation
          startIcon={<FacebookIcon />}
          sx={{
            my: 1.5,
            borderRadius: 0,
            width: "100%",
            height: 40,
            backgroundColor: "#A3A3A3",
            textTransform: "none",
            ":hover": {
              backgroundColor: "#A3A3A3",
            },
            fontSize: 16,
          }}
        >
          {isMobile ? "Sign In" : "Sign In with Facebook"}
        </Button>
      </Grid>
    </Box>
  );
}
