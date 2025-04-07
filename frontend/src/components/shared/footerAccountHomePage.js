// src/components/NetflixFooter.js

import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const FooterAccountHomePage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#141414",
        py: 4,
        px: "58px",
        mt: 2,
        color: "#757575",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {/* שורת האייקונים */}
      <Box sx={{ display: "flex", gap: 2 }}>
        <IconButton size="small" sx={{ p: 0 }}>
          <FacebookIcon sx={{ color: "#757575" }} />
        </IconButton>
        <IconButton size="small" sx={{ p: 0 }}>
          <InstagramIcon sx={{ color: "#757575" }} />
        </IconButton>
        <IconButton size="small" sx={{ p: 0 }}>
          <TwitterIcon sx={{ color: "#757575" }} />
        </IconButton>
        <IconButton size="small" sx={{ p: 0 }}>
          <YouTubeIcon sx={{ color: "#757575" }} />
        </IconButton>
      </Box>

      {/* 4 עמודות */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(100px, 1fr))",
          gap: 2,
        }}
      >
        {/* עמודה 1 */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="body2">Audio Description</Typography>
          <Typography variant="body2">Investor Relations</Typography>
          <Typography variant="body2">Privacy</Typography>
          <Typography variant="body2">Contact Us</Typography>

          {/* Service Code ככפתור קטן עם מסגרת */}
          <Box
            sx={{
              border: "1px solid #757575",
              width: "fit-content",
              px: 1,
              py: 0.3,
              cursor: "pointer",
            }}
          >
            <Typography variant="body2" sx={{ color: "#757575" }}>
              Service Code
            </Typography>
          </Box>

          {/* שורת זכויות יוצרים */}
          <Typography variant="body2">© 1997-2024 Netflix, Inc.</Typography>
        </Box>

        {/* עמודה 2 */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="body2">Help Center</Typography>
          <Typography variant="body2">Jobs</Typography>
          <Typography variant="body2">Legal Notices</Typography>
          <Typography variant="body2">
            Do Not Sell or Share My Personal Information
          </Typography>
        </Box>

        {/* עמודה 3 */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="body2">Gift Cards</Typography>
          <Typography variant="body2">Netflix Shop</Typography>
          <Typography variant="body2">Cookie Preferences</Typography>
          <Typography variant="body2">Ad Choices</Typography>
        </Box>

        {/* עמודה 4 */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="body2">Media Center</Typography>
          <Typography variant="body2">Terms of Use</Typography>
          <Typography variant="body2">Corporate Information</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default FooterAccountHomePage;



