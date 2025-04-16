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
  Menu,
  MenuItem as MuiMenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { clearAuth } from "../../services/authService"; // ✅ הוספנו

const navLinks = [
  { label: "Home", path: "/AccountHomePage" },
  { label: "TV Shows", path: "/TvShowsPage" },
  { label: "Movies", path: "/MoviesPage" },
  { label: "New & Popular", path: "/NewAndPopular" },
  { label: "My List", path: "/MyListPage" },
  { label: "Browse", path: null },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null); // ✅ לתפריט
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget); // ✅ פתיחה
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    clearAuth();
    handleCloseMenu();
    navigate("/SignIn");
  };

  const drawer = (
    <Box
      sx={{ width: 240, backgroundColor: "#141414", height: "100%" }}
      onClick={handleDrawerToggle}
    >
      <List>
        {navLinks.map((link) =>
          link.path ? (
            <NavLink
              key={link.label}
              to={link.path}
              style={{ textDecoration: "none" }}
            >
              <ListItem disablePadding>
                <ListItemButton selected={location.pathname === link.path}>
                  <ListItemText
                    primary={link.label}
                    primaryTypographyProps={{
                      sx: {
                        color:
                          location.pathname === link.path ? "#fff" : "#E5E5E5",
                        fontWeight:
                          location.pathname === link.path ? "bold" : 400,
                        fontFamily: "Netflix Sans, Arial, sans-serif",
                        fontSize: "14px",
                        lineHeight: "17px",
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>
          ) : (
            <ListItem key={link.label} disablePadding>
              <ListItemButton>
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{
                    sx: {
                      color: "#E5E5E5",
                      fontWeight: 400,
                      fontFamily: "Netflix Sans, Arial, sans-serif",
                      fontSize: "14px",
                      lineHeight: "17px",
                      cursor: "pointer",
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          )
        )}
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
        <Toolbar
          disableGutters
          sx={{
            minHeight: "68px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* Left: Logo and navigation links */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {isMobile && (
              <IconButton
                color="inherit"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
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

            {!isMobile && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  ml: 2,
                }}
              >
                {navLinks.map((link) => {
                  const isActive = link.path && location.pathname === link.path;

                  return link.path ? (
                    <NavLink
                      key={link.label}
                      to={link.path}
                      style={{ textDecoration: "none" }}
                    >
                      <Typography
                        sx={{
                          cursor: "pointer",
                          fontFamily: "Netflix Sans, Arial, sans-serif",
                          fontSize: "14px",
                          fontWeight: 400,
                          lineHeight: "17px",
                          color: isActive ? "#fff" : "#E5E5E5",
                          opacity: isActive ? 1 : 0.8,
                          transition: "opacity 0.3s ease",
                          "&:hover": {
                            opacity: 1,
                          },
                        }}
                      >
                        {link.label}
                      </Typography>
                    </NavLink>
                  ) : (
                    <Typography
                      key={link.label}
                      sx={{
                        cursor: "pointer",
                        fontFamily: "Netflix Sans, Arial, sans-serif",
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "17px",
                        color: "#E5E5E5",
                        opacity: 0.7,
                        transition: "opacity 0.3s ease",
                        "&:hover": {
                          opacity: 1,
                        },
                      }}
                    >
                      {link.label}
                    </Typography>
                  );
                })}
              </Box>
            )}
          </Box>

          {/* Right: icons */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              flexShrink: 0,
            }}
          >
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
            <IconButton onClick={handleAvatarClick} sx={{ padding: 0 }}>
              <Box
                component="img"
                src="/assets/smallAvatarUserIcon.svg"
                alt="User Avatar"
                sx={{
                  width: 32,
                  height: 32,
                  objectFit: "contain",
                }}
              />
              <ArrowDropDownIcon sx={{ color: "white" }} />
            </IconButton>

            {/* Dropdown */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              disableScrollLock // ✅ prevents scrollbar side jump
              sx={{
                mt: 1,
                "& .MuiPaper-root": {
                  backgroundColor: "#141414",
                  color: "#fff",
                  border: "1px solid #333",
                },
              }}
            >
              <MuiMenuItem
                onClick={handleLogout}
                sx={{
                  fontFamily: "Netflix Sans, Arial, sans-serif",
                  fontSize: "14px",
                  lineHeight: "17px",
                }}
              >
                Logout
              </MuiMenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
              backgroundColor: "#141414",
              color: "#fff",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;
