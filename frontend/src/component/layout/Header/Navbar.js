import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  MenuItem,
  MenuList,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AdbIcon from "@mui/icons-material/Adb";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const drawerWidth = 200;

function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };
  return (
    <AppBar position="fixed" style={{ backgroundColor: "#000", zIndex: 1 }}>
      <Container>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Manu icon */}
          <Box
            onClick={handleDrawerOpen}
            sx={{
              display: { xs: "flex", sm: "none" },
              justifyContent: "flex-start",
              zIndex: 1,
            }}
          >
            <MenuIcon style={{ color: "#fff" }} />
          </Box>
          <AdbIcon sx={{ display: "flex" }} />
          {/* mobile menu bar */}
          <Drawer
            sx={{
              width: drawerWidth,
              zIndex: 100,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            variant="temporary"
            anchor="left"
            onClose={() => {
              handleDrawerClose();
            }}
            open={openDrawer}
          >
            <DrawerHeader>
              <Typography sx={{ flexGrow: 1 }}>Coolway</Typography>
              <IconButton onClick={handleDrawerClose}>
                <CloseIcon />
              </IconButton>
            </DrawerHeader>

            <MenuList
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <NavLink
                onClick={handleDrawerClose}
                to={`/`}
                style={{ color: "#000", textDecoration: "none" }}
              >
                <MenuItem sx={{ display: "inline-block" }}>Home</MenuItem>
              </NavLink>

              <NavLink
                onClick={handleDrawerClose}
                to={`/`}
                style={{ color: "#000", textDecoration: "none" }}
              >
                <MenuItem sx={{ display: "inline-block" }}>About us</MenuItem>
              </NavLink>

              <NavLink
                onClick={handleDrawerClose}
                to={`/`}
                style={{ color: "#000", textDecoration: "none" }}
              >
                <MenuItem sx={{ display: "inline-block" }}>Menu</MenuItem>
              </NavLink>

              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <NavLink
                  to={`/login`}
                  onClick={handleDrawerClose}
                  style={{ color: "#000", textDecoration: "none" }}
                >
                  <MenuItem sx={{ display: "inline-block" }}>Log in</MenuItem>
                </NavLink>
                <NavLink
                  to={`/`}
                  onClick={handleDrawerClose}
                  style={{ color: "#000", textDecoration: "none" }}
                >
                  <MenuItem sx={{ display: "inline-block" }}>Sign up</MenuItem>
                </NavLink>
              </Box>
            </MenuList>
          </Drawer>
          {/* destop Menu */}
          <MenuList sx={{ display: { xs: "none", sm: "flex" } }}>
            <NavLink to={`/`} style={{ textDecoration: "none", color: "#fff" }}>
              <MenuItem style={{ padding: "8px 16px" }}>Home</MenuItem>
            </NavLink>
            <NavLink
              to={`/about`}
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <MenuItem style={{ padding: "8px 16px" }}>about</MenuItem>
            </NavLink>
            <NavLink
              to={`/products`}
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <MenuItem style={{ padding: "8px 16px" }}>products</MenuItem>
            </NavLink>
            <NavLink
              to={`/login`}
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <MenuItem style={{ padding: "8px 16px" }}>LogIn</MenuItem>
            </NavLink>
          </MenuList>
          <SearchIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
