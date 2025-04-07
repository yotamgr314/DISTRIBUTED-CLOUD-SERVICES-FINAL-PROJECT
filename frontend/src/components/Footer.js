import React from "react";
import { Box, Typography } from "@mui/material";
import { ReactComponent as TranslatorIcon } from "../assets/translator-icon.svg";

const footerColumns = [
  ["FAQ", "Privacy", "Ad Choices"],
  ["Help Center", "Cookie Preferences"],
  ["Netflix Shop", "Corporate Information"],
  ["Terms of Use", "Do Not Sell or Share My Personal Information"],
];

const LanguageSelector = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "transparent",
        border: "1px solid #FFFFFF",
        borderRadius: "4px",
        padding: "6px 16px",
        gap: "8px",
        width: "max-content",
      }}
    >
      {/* השתמשנו ב-SVG חיצוני - ודא שהקובץ נמצא ב-src/assets */}
      <TranslatorIcon style={{ width: 16, height: 16, fill: "none" }} />
      <Typography
        sx={{
          fontFamily: "ABeeZee",
          fontSize: "16px",
          color: "#fff",
        }}
      >
        English
      </Typography>
      <Typography
        sx={{
          fontFamily: "ABeeZee",
          fontSize: "16px",
          color: "#fff",
        }}
      >
        ▼
      </Typography>
    </Box>
  );
};

const Footer = () => {
  return (
    <Box
      sx={{
        // ב-xs ו-sm (עד 900px) יהיה relative, וב-md ומעלה absolute
        position: { xs: "relative", sm: "relative", md: "absolute" },
        bottom: { xs: "auto", sm: "auto", md: 0 },
        left: 0,
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        padding: {
          xs: "24px 30px",
          sm: "32px 40px",
          md: "40px 50px",
        },
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        zIndex: 2,
        mt: { xs: 4, sm: 4, md: 0 }, // במובייל להוסיף מרווח מעל כדי שלא יהיה צפוף
      }}
    >
      {/* טקסט עליון */}
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

      {/* עמודות Footer */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        {footerColumns.map((column, colIndex) => (
          <Box
            key={colIndex}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              minWidth: "150px",
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
            {colIndex === 0 && <LanguageSelector />}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Footer;
