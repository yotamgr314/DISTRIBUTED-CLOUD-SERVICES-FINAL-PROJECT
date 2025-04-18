import React, { useState, useEffect } from "react";
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
import { clearAuth, getToken } from "../../services/authService";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings"; // הוספה

const navLinks = [
  { label: "Home", path: "/AccountHomePage" },
  { label: "TV Shows", path: "/TvShowsPage" },
  { label: "Movies", path: "/MoviesPage" },
  { label: "New & Popular", path: "/NewAndPopular" },
  { label: "My List", path: "/MyListPage" },
  { label: "Browse", path: null },
];

const avatars = [
  "/assets/redIcon.svg",
  "/assets/blueIcon.svg",
  "/assets/purpleIcon.svg",
  "/assets/yellowIcon.svg",
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();
  const navigate = useNavigate();

  const role = sessionStorage.getItem("role");

  useEffect(() => {
    const profileId = sessionStorage.getItem("selectedProfileId");
    const token = getToken();

    if (profileId && token) {
      fetch(`http://localhost:5000/api/profiles/${profileId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => (res.ok ? res.json() : null))
        .then((profile) => {
          if (profile && typeof profile.avatarIndex === "number") {
            setAvatarUrl(avatars[profile.avatarIndex] || avatars[2]); // fallback: purple
          }
        })
        .catch((err) => {
          console.error("Failed to fetch profile:", err);
        });
    }
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
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

        {role === "admin" && (
          <NavLink to="/AddProgram" style={{ textDecoration: "none" }}>
            <ListItem disablePadding>
              <ListItemButton selected={location.pathname === "/AddProgram"}>
                <ListItemText
                  primary="Add New Program"
                  primaryTypographyProps={{
                    sx: {
                      color:
                        location.pathname === "/AddProgram"
                          ? "#fff"
                          : "#E5E5E5",
                      fontWeight:
                        location.pathname === "/AddProgram" ? "bold" : 400,
                      fontFamily: "Netflix Sans, Arial, sans-serif",
                      fontSize: "14px",
                      lineHeight: "17px",
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          </NavLink>
        )}

        <ListItem disablePadding>
          <ListItemButton onClick={handleLogout}>
            <ListItemText
              primary="Logout"
              primaryTypographyProps={{
                sx: {
                  color: "#E50914",
                  fontWeight: 600,
                  fontFamily: "Netflix Sans, Arial, sans-serif",
                  fontSize: "14px",
                  lineHeight: "17px",
                },
              }}
            />
          </ListItemButton>
        </ListItem>
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

                {role === "admin" && (
                  <NavLink to="/AddProgram" style={{ textDecoration: "none" }}>
                    <Typography
                      sx={{
                        cursor: "pointer",
                        fontFamily: "Netflix Sans, Arial, sans-serif",
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "17px",
                        color:
                          location.pathname === "/AddProgram"
                            ? "#fff"
                            : "#E5E5E5",
                        opacity: location.pathname === "/AddProgram" ? 1 : 0.8,
                        transition: "opacity 0.3s ease",
                        "&:hover": {
                          opacity: 1,
                        },
                      }}
                    >
                      Add New Program
                    </Typography>
                  </NavLink>
                )}
              </Box>
            )}
          </Box>

          {/* Right Icons + Avatar */}
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
              sx={{ width: 24, height: 24, cursor: "pointer" }}
            />
            <Box
              component="img"
              src="/assets/alertbellIcons.svg"
              alt="Alerts"
              sx={{ width: 24, height: 24, cursor: "pointer" }}
            />
            {role === "admin" ? (
              <IconButton onClick={handleAvatarClick} sx={{ padding: 0 }}>
                <AdminPanelSettingsIcon sx={{ color: "#fff", fontSize: 32 }} />
                <ArrowDropDownIcon sx={{ color: "white" }} />
              </IconButton>
            ) : (
              avatarUrl && (
                <IconButton onClick={handleAvatarClick} sx={{ padding: 0 }}>
                  <Box
                    component="img"
                    src={avatarUrl}
                    alt="User Avatar"
                    sx={{ width: 32, height: 32, objectFit: "contain" }}
                  />
                  <ArrowDropDownIcon sx={{ color: "white" }} />
                </IconButton>
              )
            )}

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              disableScrollLock
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

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
              backgroundColor: "#141414",
              color: "#fff",
              overflowX: "hidden",
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
