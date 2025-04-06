// src/components/Footer.js
import React from "react";
import { Box, Typography } from "@mui/material";

const footerColumns = [
  // Column 1
  ["FAQ", "Privacy", "Ad Choices"],
  // Column 2
  ["Help Center", "Cookie Preferences"],
  // Column 3
  ["Netflix Shop", "Corporate Information"],
  // Column 4
  ["Terms of Use", "Do Not Sell or Share My Personal Information"],
];

const Footer = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        padding: "40px 50px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        zIndex: 2,
      }}
    >
      {/* Top Text */}
      <Typography
        sx={{
          fontFamily: "ABeeZee",
          fontSize: "16px",
          lineHeight: "19px",
          color: "#B3B3B3",
        }}
      >
        Questions? Call 1-844-505-2993
      </Typography>

      {/* Four Columns of Links */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "40px", // Adjust spacing between columns
        }}
      >
        {footerColumns.map((column, colIndex) => (
          <Box
            key={colIndex}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              minWidth: "150px", // Ensures each column has some width
            }}
          >
            {column.map((link, linkIndex) => (
              <Typography
                key={linkIndex}
                sx={{
                  fontFamily: "Netflix Sans, Arial, sans-serif",
                  fontSize: "14px",
                  lineHeight: "18px",
                  textDecoration: "underline",
                  color: "#B3B3B3",
                  cursor: "pointer",
                }}
              >
                {link}
              </Typography>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Footer;
