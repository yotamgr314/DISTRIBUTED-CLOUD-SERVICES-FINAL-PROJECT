import React from "react";
import { AppBar, Box, Toolbar, Typography, IconButton, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
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
      <Toolbar disableGutters>
        {/* Left Side: Logo and Navigation Links */}
        <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
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
          {/* Only show full nav links on desktop */}
          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px", ml: 2 }}>
              <Typography sx={{ cursor: "pointer" }}>Home</Typography>
              <Typography sx={{ cursor: "pointer" }}>TV Shows</Typography>
              <Typography sx={{ cursor: "pointer" }}>Movies</Typography>
              <Typography sx={{ cursor: "pointer" }}>New &amp; Popular</Typography>
              <Typography sx={{ cursor: "pointer" }}>My List</Typography>
              <Typography sx={{ cursor: "pointer" }}>Browse</Typography>
            </Box>
          )}
        </Box>

        {/* Right Side: Custom Icons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px", flexShrink: 0 }}>
          {isMobile && (
            <IconButton color="inherit" sx={{ display: { xs: "block", md: "none" } }}>
              <MenuIcon />
            </IconButton>
          )}
          {/* Search Icon */}
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
          {/* Alert/Bell Icon */}
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
          {/* User Avatar Icon */}
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
  );
};

export default Navbar;
