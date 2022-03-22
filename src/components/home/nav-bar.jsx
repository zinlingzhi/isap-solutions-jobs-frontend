// react
import * as React from "react";

// components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

// icons and logos
import logo from "../../assets/logos/isap-logo.png";

// miscellaneous
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function NavigationBar() {
  // create constant to look for changes in the device display size
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // user interface
  return (
    <Box sx={{ flexGrow: 1, maxHeight: 20 }}>
      <AppBar
        position="static"
        elevation={0}
        sx={{ backgroundColor: "#E5E5E5", py: 1, px: isMobile ? 0 : 10 }}
      >
        <Toolbar>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <a href={`${process.env.PUBLIC_URL}/`}>
                <img alt={"isap-logo"} src={logo} width="100%" />
              </a>
            </Grid>
            <Grid item>
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <Typography
                    sx={{ fontSize: 16, fontWeight: 700, color: "#3F3F46" }}
                  >
                    EN
                  </Typography>
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>
                    <Typography
                      sx={{ fontSize: 16, fontWeight: 700, color: "#3F3F46" }}
                    >
                      EN
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Typography
                      sx={{ fontSize: 16, fontWeight: 700, color: "#3F3F46" }}
                    >
                      GE
                    </Typography>
                  </MenuItem>
                </Menu>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
