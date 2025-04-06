// src/pages/LoginPage.js

import React from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import Footer from "../components/Footer";

const LoginPage = () => {
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
          backgroundImage: 'url("/assets/hero-image.png")',
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

      {/* Netflix Logo as Styled Text (top-left) */}
      <Box
        sx={{
          position: "absolute",
          top: "20px",
          left: "20px",
          zIndex: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#E50914",
            fontFamily: "Arial, sans-serif",
          }}
        >
          NETFLIX
        </Typography>
      </Box>

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

      {/* Login Form Container */}
      <Container
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

        {/* Email Field */}
        <TextField
          variant="filled"
          label="Email or phone number"
          type="email"
          fullWidth
          sx={{
            mb: 2,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            "& .MuiFilledInput-input": { color: "#fff" },
            "& .MuiInputLabel-root": { color: "#8c8c8c" },
          }}
        />

        {/* Password Field */}
        <TextField
          variant="filled"
          label="Password"
          type="password"
          fullWidth
          sx={{
            mb: 2,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            "& .MuiFilledInput-input": { color: "#fff" },
            "& .MuiInputLabel-root": { color: "#8c8c8c" },
          }}
        />

        {/* Log In Button */}
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#E50914",
            fontWeight: "bold",
            paddingY: 1.5,
            mb: 2,
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#f40612",
            },
          }}
        >
          Log In
        </Button>

        {/* reCAPTCHA Note */}
        <Typography
          variant="body2"
          sx={{
            fontFamily: "Netflix Sans",
            fontWeight: 400,
            fontSize: "13px",
            lineHeight: "16px",
            color: "#808080",
            textAlign: "center",
          }}
        >
          This page is protected by Google reCAPTCHA to ensure you’re not a bot.
          <br />
          <u>Learn more.</u>
        </Typography>
      </Container>

      {/* Footer Component */}
      <Footer />
    </Box>
  );
};

export default LoginPage;
