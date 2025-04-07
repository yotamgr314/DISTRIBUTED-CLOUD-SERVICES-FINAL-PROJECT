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
        gap: "16px",
      }}
    >
      {/* Social Media Icons Row (colored white) */}
      <Box sx={{ display: "flex", gap: "16px" }}>
        <IconButton size="small" sx={{ p: 0 }}>
          <FacebookIcon sx={{ color: "#fff" }} />
        </IconButton>
        <IconButton size="small" sx={{ p: 0 }}>
          <InstagramIcon sx={{ color: "#fff" }} />
        </IconButton>
        <IconButton size="small" sx={{ p: 0 }}>
          <TwitterIcon sx={{ color: "#fff" }} />
        </IconButton>
        <IconButton size="small" sx={{ p: 0 }}>
          <YouTubeIcon sx={{ color: "#fff" }} />
        </IconButton>
      </Box>

      {/* Footer Columns */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "16px",
        }}
      >
        {/* Column 1 */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="body2" sx={{ cursor: "pointer" }}>
            Audio Description
          </Typography>
          <Typography variant="body2" sx={{ mt: "16px", cursor: "pointer" }}>
            Investor Relations
          </Typography>
          <Typography variant="body2" sx={{ mt: "16px", cursor: "pointer" }}>
            Privacy
          </Typography>
          <Typography variant="body2" sx={{ mt: "16px", cursor: "pointer" }}>
            Contact Us
          </Typography>
          {/* 32px gap above Service Code */}
          <Box
            sx={{
              border: "1px solid #757575",
              width: "fit-content",
              px: 1,
              py: 0.3,
              mt: "32px",
              cursor: "pointer",
            }}
          >
            <Typography variant="body2" sx={{ color: "#757575" }}>
              Service Code
            </Typography>
          </Box>
          {/* 20px gap above the copyright */}
          <Typography variant="body2" sx={{ mt: "20px" }}>
            © 1997-2024 Netflix, Inc.
          </Typography>
        </Box>

        {/* Column 2 */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="body2" sx={{ cursor: "pointer" }}>
            Help Center
          </Typography>
          <Typography variant="body2" sx={{ mt: "16px", cursor: "pointer" }}>
            Jobs
          </Typography>
          <Typography variant="body2" sx={{ mt: "16px", cursor: "pointer" }}>
            Legal Notices
          </Typography>
          <Typography variant="body2" sx={{ mt: "16px", cursor: "pointer" }}>
            Do Not Sell or Share My Personal Information
          </Typography>
        </Box>

        {/* Column 3 */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="body2" sx={{ cursor: "pointer" }}>
            Gift Cards
          </Typography>
          <Typography variant="body2" sx={{ mt: "16px", cursor: "pointer" }}>
            Netflix Shop
          </Typography>
          <Typography variant="body2" sx={{ mt: "16px", cursor: "pointer" }}>
            Cookie Preferences
          </Typography>
          <Typography variant="body2" sx={{ mt: "16px", cursor: "pointer" }}>
            Ad Choices
          </Typography>
        </Box>

        {/* Column 4 */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="body2" sx={{ cursor: "pointer" }}>
            Media Center
          </Typography>
          <Typography variant="body2" sx={{ mt: "16px", cursor: "pointer" }}>
            Terms of Use
          </Typography>
          <Typography variant="body2" sx={{ mt: "16px", cursor: "pointer" }}>
            Corporate Information
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default FooterAccountHomePage;



