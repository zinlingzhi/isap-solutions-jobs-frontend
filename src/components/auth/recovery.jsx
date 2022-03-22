import * as React from "react";

// components
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

// icons and logos
import CheckIcon from "@mui/icons-material/Check";

export default function Recovery() {
  const [isSent, setIsSent] = React.useState(false);

  const sendEmail = () => {
    if (isSent) {
    } else {
      setIsSent(true);
    }
  };

  return (
    <Grid container direction="row" justifyContent="center">
      <Paper
        variant="outlined"
        square
        sx={{
          boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.1)",
          width: 430,

          py: 2,
          marginTop: 10,
          marginBottom: 4,
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: 18,
                marginTop: 1,
                marginBottom: 2,
              }}
            >
              Recover Password
            </Typography>
          </Grid>

          {isSent ? (
            <>
              <CheckIcon sx={{ fontSize: 100 }} />
              <Typography sx={{ fontSize: 14, fontWeight: 500 }}>
                Check your Email
              </Typography>
            </>
          ) : (
            <TextField
              sx={{ width: 310 }}
              id="email-recover"
              label="Email"
              variant="standard"
            />
          )}

          <Grid item>
            <Button
              onClick={sendEmail}
              variant="contained"
              disableElevation
              sx={{
                my: 3,
                borderRadius: 0,
                width: isSent ? 200 : 140,
                height: 40,
                backgroundColor: isSent ? "#A3A3A3" : "#1D4ED8",
                textTransform: "none",
                ":hover": {
                  backgroundColor: isSent ? "#A3A3A3" : "#1D4ED8",
                },
                fontSize: 16,
              }}
            >
              {isSent ? "Go to Home Page" : "Send"}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
