import { Mail, Notifications, Pets } from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Badge,
  Menu,
  MenuItem,
  styled,
  Box,
  Grid,
  Hidden,
  Stack,
  Paper,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";

import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const MenuItems = [
  {
    id: 1,
    name: "NEW ARRIVALS",
    link: "/#",
  },
  {
    id: 2,
    name: "MEN",
    link: "/#services",
  },
  {
    id: 3,
    name: "WINTER COLLECTION",
    link: "/#",
  },
  {
    id: 3,
    name: "SHOP BY MERCH",
    link: "/#",
  },
  {
    id: 3,
    name: "UNI SEX",
    link: "/#",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const appBar = {
    backgroundColor: "white",
    borderColor: "#ABE3CD",
  };

  const logo = {
    padding: 2,
  };

  const search = {
    position: "relative",
    borderRadius: 10,
    backgroundColor: "#ABE3CD",
    "&:hover": {
      backgroundColor: "black",
    },
    marginLeft: "40%",
  };

  const searchIcon = {
    padding: 5,
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ABE3CD ",
  };

  const inputRoot = {
    color: "inherit",
  };

  return (
    <AppBar position="static" style={appBar}>
      <Toolbar style={{ display: "flex", flexDirection: "row" }}>
        <img
          src="../../assests/veirdo_logo-removebg-preview.png"
          alt="Logo"
          fit="contain"
          sx={{ width: 30, height: 30 }}
        />

        <Stack
          direction="row"
          spacing={2}
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row", flexGrow: 1 }}>
            {MenuItems.map((data) => (
              <Typography
                variant="caption"
                style={{ fontWeight: "bold", padding: 10, color: "black" }}
                align="center"
                key={data.id}
              >
                {data.name}
              </Typography>
            ))}
          </div>
        </Stack>

        <div style={search}>
          <div style={searchIcon}>
            <SearchIcon />
          </div>
          <InputBase placeholder="Search..." style={inputRoot} />
        </div>

        <div>
          <IconButton color="#ABE3CD " onClick={console.log("gg")}>
            <AccountCircle />
          </IconButton>
          <IconButton color="#ABE3CD">
            <Badge badgeContent={3} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </div>

        <Menu
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
          onClose={console.log("h")}
        >
          <MenuItem onClick={console.log("h")}>Profile</MenuItem>
          <MenuItem onClick={console.log("h")}>My account</MenuItem>
          <MenuItem onClick={console.log("h")}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
