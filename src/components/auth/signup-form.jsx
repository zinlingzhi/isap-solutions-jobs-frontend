import * as React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// components
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";

// icons
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleSignInUpButton from "./google-signIn";

// miscellaneous
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function SignUpForm() {
  let navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [type, setType] = React.useState("");

  const selectType = (event) => {
    setType(event.target.value);
  };

  const signUpManually = () => {
    // axios call & body
    const body = {
      type: type,
      name: firstName,
      lastname: lastName,
      email: email,
      phone: phone,
      pass: password,
      confirmpass: confirmPassword,
    };

    console.log(body);

    axios
      .post(`https://flasksingintest.azurewebsites.net/signup`, body)
      .then((res) => {
        console.log(res);
        navigate(`${process.env.PUBLIC_URL}/search-jobs`);
      });
  };

  return (
    <Box sx={{ px: 4, py: 2 }}>
      <Grid container direction="column" alignItems="center">
        <FormControl variant="standard" fullWidth required>
          <InputLabel id="demo-simple-select-standard-label">
            Your Type
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={type}
            onChange={selectType}
            label="Your Type"
          >
            <MenuItem value={0}>Professional</MenuItem>
            <MenuItem value={1}>Student</MenuItem>
            <MenuItem value={2}>Business, HR or Project Manager</MenuItem>
          </Select>
        </FormControl>
        <TextField
          onChange={(event) => setFirstName(event.target.value)}
          required
          fullWidth
          id="firstname-required"
          label="First Name"
          variant="standard"
        />
        <TextField
          onChange={(event) => setLastName(event.target.value)}
          required
          fullWidth
          id="lastname-required"
          label="Last Name"
          variant="standard"
        />
        <TextField
          onChange={(event) => setEmail(event.target.value)}
          required
          fullWidth
          id="email-required"
          label="Email"
          variant="standard"
        />
        <TextField
          onChange={(event) => setPhone(event.target.value)}
          fullWidth
          id="phonenumber"
          label="Phone Number"
          variant="standard"
        />
        <TextField
          onChange={(event) => setPassword(event.target.value)}
          required
          fullWidth
          id="password-required"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        <TextField
          onChange={(event) => setConfirmPassword(event.target.value)}
          required
          fullWidth
          id="confirm-password-required"
          label="Confirm Password"
          type="password"
          variant="standard"
        />

        <Button
          onClick={signUpManually}
          variant="contained"
          disableElevation
          sx={{
            my: 4,
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
          Sign Up
        </Button>

        <Divider spacing={1} sx={{ width: "100%" }}>
          <Typography
            sx={{ fontWeight: "normal", fontSize: 15, color: "gray" }}
          >
            OR
          </Typography>
        </Divider>

        <GoogleSignInUpButton exists={false} />

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
