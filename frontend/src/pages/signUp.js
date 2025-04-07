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
      {/* רקע ושכבת אוברליי */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: 'url("/assets/hero-image.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        }}
      />

      {/* מבנה עוטף (Flex-column) כדי שהתוכן יהיה בזרימה טבעית */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        {/* Header - לוגו נטפליקס */}
        <Box
          sx={{
            padding: { xs: "20px", md: "20px 50px" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "1.5rem", md: "2rem" },
              fontWeight: "bold",
              color: "#E50914",
              fontFamily: "Arial, sans-serif",
            }}
          >
            NETFLIX
          </Typography>
        </Box>

        {/* Main Content - טופס התחברות */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: { xs: 8, sm: 8, md: 0 },
            mb: { xs: 4, sm: 4, md: 0 },
          }}
        >
          <Container
            sx={{
              position: "relative", // חלק מהזרימה – לא absolute
              width: { xs: "90%", sm: "70%", md: "450px" },
              backgroundColor: "rgba(0, 0, 0, 0.75)",
              borderRadius: "4px",
              padding: { xs: "24px", sm: "32px", md: "40px 50px" },
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              mb: 4, // מרווח תחתון למניעת התנגשות עם ה-footer
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
              This page is protected by Google reCAPTCHA to ensure you’re not a
              bot.
              <br />
              <u style={{ color: "#0071EB" }}>Learn more.</u>
            </Typography>
          </Container>
        </Box>

        {/* Footer - בתור אלמנט זרימה, לא absolute */}
        <Footer />
      </Box>
    </Box>
  );
};

export default LoginPage;
