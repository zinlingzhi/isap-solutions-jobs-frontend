import * as React from "react";

// components
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// icons and logos
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import ProjectIcon from "@mui/icons-material/AccountTree";
import Messenger from "@mui/icons-material/Forum";
import Calendar from "@mui/icons-material/Today";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import logo from "../../assets/logos/isap-logo-dark.png";

// custom components
import DashboardViewCV from "./dashboard-view-cv";
import AdminSearchCV from "./search-cv";

export default function DrawerContent(props) {
  const [selected, setSelected] = React.useState(0);

  const renderUI = (index) => {
    setSelected(index);
    switch (index) {
      case 0:
        props.selectOption(<DashboardViewCV />);
        break;
      case 1:
        props.selectOption(<div />);
        break;
      case 2:
        props.selectOption(<AdminSearchCV />);
        break;
      case 3:
        props.selectOption(<div />);
        break;
      case 4:
        props.selectOption(<div />);
        break;
      case 5:
        props.selectOption(<div />);
        break;
      case 6:
        props.selectOption(<div />);
        break;
      default:
        break;
    }
  };

  return (
    <Box sx={{ backgroundColor: "#3F3F46", color: "white", height: "100vh" }}>
      <Grid container direction="row" justifyContent="center">
        <Grid item sx={{ py: 4 }}>
          <img alt={"isap-logo"} src={logo} />
        </Grid>
      </Grid>

      <List>
        {[
          { name: "Home", icon: <HomeIcon /> },
          { name: "Notifications", icon: <NotificationsIcon /> },
          { name: "Search CV", icon: <SearchIcon /> },
          { name: "Projects", icon: <ProjectIcon /> },
          { name: "Messenger", icon: <Messenger /> },
          { name: "Calendar", icon: <Calendar /> },
          { name: "Settings", icon: <Settings /> },
        ].map((item, index) => (
          <ListItem
            button
            key={item.name}
            onClick={() => renderUI(index)}
            sx={{
              marginLeft: 2,
              backgroundColor: selected === index ? "#27272A" : "#3F3F46",
              ":hover": {
                backgroundColor: selected === index ? "#27272A" : "#3F3F46",
              },
            }}
          >
            <ListItemIcon
              sx={{ color: selected === index ? "white" : "#27272A" }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText>
              <Typography
                sx={{ textTransform: "none", fontWeight: 700, fontSize: 14 }}
              >
                {item.name}
              </Typography>
            </ListItemText>
          </ListItem>
        ))}
      </List>
      <Button
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          left: "50%",
          marginLeft: "-50%",
          color: "white",
          backgroundColor: "#27272A",
          textTransform: "none",
          fontSize: 14,
          fontWeight: 500,
        }}
        startIcon={<Logout />}
      >
        Logout
      </Button>
    </Box>
  );
}
