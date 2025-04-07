// src/pages/SignIn.js

import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "../components/shared/footerSignInUp";


const SignIn = () => {
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (remember) {
      const now = new Date();
      now.setTime(now.getTime() + 60 * 60 * 1000); // 1 שעה
      document.cookie =
        "rememberMe=true; expires=" + now.toUTCString() + "; path=/";
    }
    // כאן תוכל להוסיף לוגיקת התחברות (API וכו')
    console.log("Sign in submitted. Remember me:", remember);
  };

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#000",
        overflow: "hidden",
      }}
    >
      {/* רקע + אוברליי */}
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

      {/* מבנה עוטף (Flex-column) */}
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
        <Box sx={{ padding: { xs: "20px", md: "20px 50px" } }}>
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
            component="form"
            onSubmit={handleSubmit}
            sx={{
              position: "relative",
              width: { xs: "90%", sm: "70%", md: "450px" },
              backgroundColor: "rgba(0, 0, 0, 0.75)",
              borderRadius: "4px",
              padding: { xs: "24px", sm: "32px", md: "40px 50px" },
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              mb: 4,
            }}
          >
            {/* כותרת */}
            <Typography
              variant="h3"
              sx={{
                mb: 2,
                fontWeight: "bold",
                color: "#fff",
                fontFamily: "ABeeZee",
              }}
            >
              Sign In
            </Typography>

            {/* שדה אימייל */}
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

            {/* שדה סיסמה */}
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

            {/* כפתור Sign In */}
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#E50914",
                fontWeight: "bold",
                paddingY: 1.5,
                mb: 2,
                textTransform: "none",
                "&:hover": { backgroundColor: "#f40612" },
              }}
            >
              Sign In
            </Button>

            {/* Forgot Password? - ממוקם במרכז */}
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="body2"
                onClick={() => navigate("/forgot-password")}
                sx={{
                  fontFamily: "Netflix Sans, Arial, sans-serif",
                  fontSize: "14px",
                  lineHeight: "18px",
                  textDecoration: "underline",
                  color: "#B3B3B3",
                  cursor: "pointer",
                }}
              >
                Forgot Password?
              </Typography>
            </Box>

            {/* Remember me */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  sx={{ color: "#fff", "&.Mui-checked": { color: "#fff" } }}
                />
              }
              label={
                <Typography
                  sx={{
                    fontFamily: "ABeeZee",
                    fontSize: "14px",
                    color: "#fff",
                  }}
                >
                  Remember me
                </Typography>
              }
            />

            {/* New to Netflix? Sign Up Now */}
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="body2"
                onClick={() => navigate("/signUp")}
                sx={{
                  fontFamily: "ABeeZee",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "100%",
                  letterSpacing: "0px",
                  width: "212px",
                  height: "24px",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                New to Netflix? Sign Up Now
              </Typography>
            </Box>

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
              This page is protected by Google reCAPTCHA to ensure you’re not a
              bot.
              <br />
              <u style={{ color: "#0071EB" }}>Learn more.</u>
            </Typography>
          </Container>
        </Box>

        {/* Footer */}
        <Footer />
      </Box>
    </Box>
  );
};

export default SignIn;
