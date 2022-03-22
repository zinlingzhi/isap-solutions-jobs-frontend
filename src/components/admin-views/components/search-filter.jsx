import * as React from "react";

// components
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function AdminSearchCVFilter() {
  const [continent, setContinent] = React.useState("");
  const [country, setCountry] = React.useState("");

  const handleContinent = (event) => {
    setContinent(event.target.value);
  };

  const handleCountry = (event) => {
    setCountry(event.target.value);
  };

  return (
    <Paper square elevation={0} sx={{ px: 2 }}>
      <Grid
        container
        direction="column"
        alignItems="flex-start"
        justifyContent="center"
        sx={{ py: 2 }}
      >
        <Grid item>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            sx={{ width: 320 }}
          >
            <Typography
              sx={{ fontSize: 18, fontWeight: 800, color: "#3F3F46" }}
            >
              Filter your search
            </Typography>
          </Grid>
        </Grid>

        <Divider width="100%" sx={{ my: 1 }} />

        <FormControl
          variant="standard"
          fullWidth
          sx={{ my: 1, backgroundColor: "#F5F5F5" }}
        >
          {continent === "" ? (
            <InputLabel id="demo-simple-select-standard-label">
              <Typography
                sx={{
                  color: "#3F3F46",
                  fontSize: 14,
                  fontWeight: "bold",
                  px: 2,
                }}
              >
                Continent
              </Typography>
            </InputLabel>
          ) : (
            <></>
          )}
          <Select
            labelId="continent-label"
            id="continent"
            value={continent}
            onChange={handleContinent}
            disableUnderline
            sx={{
              color: "#3F3F46",
              fontSize: 14,
              fontWeight: "bold",
              px: 2,
            }}
          >
            <MenuItem
              sx={{ color: "#3F3F46", fontSize: 14, fontWeight: "bold" }}
              value={"Asia"}
            >
              Asia
            </MenuItem>
            <MenuItem
              sx={{ color: "#3F3F46", fontSize: 14, fontWeight: "bold" }}
              value={"Africa"}
            >
              Africa
            </MenuItem>
            <MenuItem
              sx={{ color: "#3F3F46", fontSize: 14, fontWeight: "bold" }}
              value={"Europe"}
            >
              Europe
            </MenuItem>
            <MenuItem
              sx={{ color: "#3F3F46", fontSize: 14, fontWeight: "bold" }}
              value={"North America"}
            >
              North America
            </MenuItem>
            <MenuItem
              sx={{ color: "#3F3F46", fontSize: 14, fontWeight: "bold" }}
              value={"South America"}
            >
              South America
            </MenuItem>
            <MenuItem
              sx={{ color: "#3F3F46", fontSize: 14, fontWeight: "bold" }}
              value={"Australia"}
            >
              Australia
            </MenuItem>
            <MenuItem
              sx={{ color: "#3F3F46", fontSize: 14, fontWeight: "bold" }}
              value={"Antarctica"}
            >
              Antarctica
            </MenuItem>
          </Select>
        </FormControl>

        <FormControl
          variant="standard"
          fullWidth
          sx={{ my: 1, backgroundColor: "#F5F5F5" }}
        >
          {continent === "" ? (
            <InputLabel id="demo-simple-select-standard-label">
              <Typography
                sx={{
                  color: "#3F3F46",
                  fontSize: 14,
                  fontWeight: "bold",
                  px: 2,
                }}
              >
                Country
              </Typography>
            </InputLabel>
          ) : (
            <></>
          )}
          <Select
            labelId="country-label"
            id="country"
            value={country}
            onChange={handleCountry}
            disableUnderline
            sx={{
              color: "#3F3F46",
              fontSize: 14,
              fontWeight: "bold",
              px: 2,
            }}
          >
            <MenuItem
              sx={{ color: "#3F3F46", fontSize: 14, fontWeight: "bold" }}
              value={"Germany"}
            >
              Germany
            </MenuItem>
            <MenuItem
              sx={{ color: "#3F3F46", fontSize: 14, fontWeight: "bold" }}
              value={"France"}
            >
              France
            </MenuItem>
            <MenuItem
              sx={{ color: "#3F3F46", fontSize: 14, fontWeight: "bold" }}
              value={"Sweden"}
            >
              Sweden
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Paper>
  );
}
