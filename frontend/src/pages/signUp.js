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
      {/* רקע + שכבת אוברליי */}
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

      {/* מבנה עוטף בתצוגת Flex-column, כדי שה-footer יהיה בתחתית */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        {/* לוגו נטפליקס - שמאל עליון */}
        <Box
          sx={{
            position: "absolute",
            top: "20px",
            left: "20px",
            zIndex: 3,
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

        {/* Selector שפה - שמאל תחתון */}
        <Box
          sx={{
            position: "absolute",
            bottom: "20px",
            left: "20px",
            zIndex: 3,
            display: { xs: "none", md: "flex" }, // אם רוצים להסתיר/להראות בהתאם לרזולוציה – ניתן להתאים
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            border: "1px solid #545454",
            borderRadius: "4px",
            padding: "6px 16px",
            gap: "8px",
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

        {/* Content Area - מיקום הטופס */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: { xs: 4, sm: 4, md: 0 }, // במכשירים קטנים להוסיף מרווח עליון
          }}
        >
          <Container
            sx={{
              width: { xs: "90%", sm: "70%", md: "450px" },
              backgroundColor: "rgba(0, 0, 0, 0.75)",
              borderRadius: "4px",
              padding: { xs: "24px", sm: "32px", md: "40px 50px" },
              display: "flex",
              flexDirection: "column",
              gap: "20px",
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

        {/* Footer - יש לשים אותו מחוץ לאזור התוכן הראשי, בתוך ה-flex container */}
        <Footer />
      </Box>
    </Box>
  );
};

export default LoginPage;
