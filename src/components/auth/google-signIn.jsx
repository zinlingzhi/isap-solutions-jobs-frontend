import * as React from "react";
import { GoogleLogin } from "react-google-login";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// components
import Button from "@mui/material/Button";

// icons and logos
import GoogleIcon from "@mui/icons-material/Google";

// miscellaneous
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// google oauth client id
const clientID =
  "431277061803-61ndd36nav2mschaq6ngqfr075h1itji.apps.googleusercontent.com";

export default function GoogleSignInUpButton(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  let navigate = useNavigate();

  const responseGoogle = (response) => {
    console.log(response.profileObj);

    var profileObject = response.profileObj;

    if (props.exists) {
      // axios call & body
      const body = {
        email: profileObject.email,
      };

      console.log(body);

      axios
        .post(
          `https://flasksingintest.azurewebsites.net/signinwithgoogle`,
          body
        )
        .then((res) => {
          console.log(res);
          navigate("/search-jobs");
        });
    } else {
      // axios call & body
      const body = {
        name: profileObject.givenName,
        lastname: profileObject.familyName,
        email: profileObject.email,
      };

      console.log(body);

      axios
        .post(
          `https://flasksingintest.azurewebsites.net/signupwithgoogle`,
          body
        )
        .then((res) => {
          console.log(res);
          navigate("/search-jobs");
        });
    }
  };

  const error = (response) => {
    console.log(response);
  };

  return (
    <GoogleLogin
      clientId={clientID}
      render={(renderProps) => (
        <Button
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
          variant="contained"
          disableElevation
          startIcon={<GoogleIcon />}
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
          {isMobile ? "Sign In" : "Sign In with Google"}
        </Button>
      )}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={error}
      cookiePolicy={"single_host_origin"}
    />
  );
}
