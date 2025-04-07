import React from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import Footer from "../components/Footer";

const LoginPage = () => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#000",
        overflow: "hidden",
      }}
    >
      {/* רקע */}
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

      {/* שכבת אוברליי */}
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

      {/* לוגו נטפליקס כטקסט מעוצב (שמאל עליון) */}
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

      {/* Selector שפה (שמאל תחתון) */}
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

      {/* טופס התחברות */}
      <Container
        sx={{
          // במובייל (xs, sm) - relative, במחשבים (md ומעלה) - absolute במרכז
          position: { xs: "relative", sm: "relative", md: "absolute" },
          top: { md: "50%" },
          left: { md: "50%" },
          transform: { md: "translate(-50%, -50%)" },
          width: { xs: "90%", sm: "70%", md: "450px" },
          maxWidth: "90%",
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          borderRadius: "4px",
          padding: { xs: "24px", sm: "32px", md: "40px 50px" },
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          zIndex: 2,
          mt: { xs: 4, sm: 4, md: 0 },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            mb: 2,
            fontWeight: "bold",
            color: "#fff",
            fontFamily: "ABeeZee",
          }}
        >
          Log In
        </Typography>

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
          <u style={{ color: "#0071EB" }}>Learn more.</u>
        </Typography>
      </Container>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default LoginPage;
