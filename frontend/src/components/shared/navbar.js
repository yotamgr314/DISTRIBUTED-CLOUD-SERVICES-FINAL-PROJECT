import React, { useState } from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// Define your nav link labels
const navLinks = [
  "Home",
  "TV Shows",
  "Movies",
  "New & Popular",
  "My List",
  "Browse",
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // Drawer content for mobile
  const drawer = (
    <Box sx={{ width: 240 }} onClick={handleDrawerToggle}>
      <List>
        {navLinks.map((link) => (
          <ListItem key={link} disablePadding>
            <ListItemButton>
              <ListItemText primary={link} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="absolute"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          top: 0,
          left: 0,
          width: "100%",
          px: { xs: 2, md: "58px" },
          zIndex: 999,
        }}
      >
        <Toolbar disableGutters sx={{ minHeight: "68px", display: "flex", justifyContent: "space-between" }}>
          {/* Left Side: Logo and Nav Links */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {isMobile && (
              <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
                <MenuIcon />
              </IconButton>
            )}
            <Typography
              sx={{
                color: "#E50914",
                fontSize: { xs: "1.5rem", md: "2rem" },
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              NETFLIX
            </Typography>
            {/* Display nav links only on desktop */}
            {!isMobile && (
              <Box sx={{ display: "flex", alignItems: "center", gap: "20px", ml: 2 }}>
                {navLinks.map((link) => (
                  <Typography key={link} sx={{ cursor: "pointer" }}>
                    {link}
                  </Typography>
                ))}
              </Box>
            )}
          </Box>
          {/* Right Side: Custom Icons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "20px", flexShrink: 0 }}>
            <Box
              component="img"
              src="/assets/searchIcon.svg"
              alt="Search Icon"
              sx={{
                width: 24,
                height: 24,
                cursor: "pointer",
              }}
            />
            <Box
              component="img"
              src="/assets/alertbellIcons.svg"
              alt="Alerts"
              sx={{
                width: 24,
                height: 24,
                cursor: "pointer",
              }}
            />
            <Box
              component="img"
              src="/assets/smallAvatarUserIcon.svg"
              alt="User Avatar"
              sx={{
                width: 32,
                height: 32,
                objectFit: "contain",
                cursor: "pointer",
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>
      {/* Mobile Drawer */}
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Improves mobile performance.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;
