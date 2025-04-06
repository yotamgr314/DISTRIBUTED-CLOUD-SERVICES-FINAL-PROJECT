// src/pages/SignUpPage.js

import React from "react";
import { Box, Button, Typography } from "@mui/material";

const Login = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url(/assets/hero-image.png)", // Replace with your actual background
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      />

      {/* Netflix Logo (top-left) */}
      <Box
        sx={{
          position: "absolute",
          top: "20px",
          left: "20px",
          width: "148px",
          height: "40px",
          backgroundImage: "url(/assets/Netflix_2015_logo.png)", // Replace with your logo path
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          zIndex: 2,
        }}
      />

      {/* Language Selector (bottom-left) */}
      <Box
        sx={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          display: "flex",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          border: "1px solid #545454",
          borderRadius: "4px",
          padding: "6px 16px",
          gap: "8px",
          zIndex: 2,
        }}
      >
        <Typography
          sx={{
            fontFamily: "ABeeZee",
            fontSize: "16px",
            color: "#fff",
          }}
        >
          English
        </Typography>
      </Box>

      {/* Sign Up Form Container */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "450px",
          maxWidth: "90%",
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          borderRadius: "4px",
          padding: "40px 50px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          zIndex: 2,
        }}
      >
        {/* Heading */}
        <Typography
          sx={{
            fontFamily: "ABeeZee",
            fontWeight: 400,
            fontSize: "32px",
            lineHeight: "40px",
            color: "#FFFFFF",
            mb: 1,
          }}
        >
          Log In
        </Typography>

        {/* Email Field (placeholder) */}
        <Box
          sx={{
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            padding: "8px 24px",
            width: "100%",
            height: "56px",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            border: "1px solid #808080",
            borderRadius: "4px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "ABeeZee",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "24px",
              color: "#BCBCBC",
            }}
          >
            Email or phone number
          </Typography>
        </Box>

        {/* Password Field (placeholder) */}
        <Box
          sx={{
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            padding: "8px 24px",
            width: "100%",
            height: "56px",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            border: "1px solid #808080",
            borderRadius: "4px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "ABeeZee",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "24px",
              color: "#BCBCBC",
            }}
          >
            Password
          </Typography>
        </Box>

        {/* Sign Up Button */}
        <Button
          variant="contained"
          sx={{
            width: "100%",
            height: "40px",
            backgroundColor: "#E50914",
            borderRadius: "4px",
            fontFamily: "ABeeZee",
            fontSize: "16px",
            lineHeight: "24px",
            color: "#FFFFFF",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#f40612",
            },
          }}
        >
          log in
        </Button>

        {/* reCAPTCHA Note */}
        <Typography
          sx={{
            fontFamily: "Netflix Sans",
            fontWeight: 400,
            fontSize: "13px",
            lineHeight: "16px",
            color: "#808080",
          }}
        >
          This page is protected by Google reCAPTCHA to ensure you’re not a bot.
          <br />
          <u>Learn more.</u>
        </Typography>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          p: "40px 50px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          zIndex: 2,
        }}
      >
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
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          {[
            "FAQ",
            "Help Center",
            "Netflix Shop",
            "Terms of Use",
            "Privacy",
            "Cookie Preferences",
            "Corporate Information",
            "Do Not Sell or Share My Personal Information",
          ].map((link, idx) => (
            <Typography
              key={idx}
              sx={{
                fontFamily: "Netflix Sans",
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
      </Box>
    </Box>
  );
};

export default Login;
