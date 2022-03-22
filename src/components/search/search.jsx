import * as React from "react";

// components
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

// icons and logos
import SearchIcon from "@mui/icons-material/Search";

export default function SearchPrompt() {
  return (
    <Paper square elevation={0} sx={{ px: 2 }}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ py: 2, width: 320 }}
      >
        <Grid item>
          <TextField
            variant="standard"
            fullWidth
            placeholder="Job title or keyword"
            InputProps={{ disableUnderline: true }}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            sx={{ borderRadius: 0, backgroundColor: "#1D4ED8" }}
          >
            <SearchIcon />
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
