// src/pages/SignUp.js

import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Footer from "../components/shared/footerSignInUp";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [remember, setRemember] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    if (!passwordRegex.test(password)) {
      alert(
        "Password must be at least 8 characters, including a letter and a number"
      );
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, role }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Registration failed");
        return;
      }

      if (remember) {
        const now = new Date();
        now.setTime(now.getTime() + 60 * 60 * 1000); // שעה קדימה
        document.cookie = `token=${
          data.token
        }; expires=${now.toUTCString()}; path=/`;
      } else {
        sessionStorage.setItem("token", data.token);
      }

      sessionStorage.setItem("role", data.role);
      navigate("/SignIn");
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
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

        {/* Main Content - טופס הרשמה */}
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
            <Typography
              variant="h3"
              sx={{
                mb: 2,
                fontWeight: "bold",
                color: "#fff",
                fontFamily: "ABeeZee",
              }}
            >
              Sign Up
            </Typography>

            <TextField
              variant="filled"
              label="Email"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                mb: 2,
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                "& .MuiFilledInput-input": { color: "#fff" },
                "& .MuiInputLabel-root": { color: "#8c8c8c" },
              }}
            />

            <TextField
              variant="filled"
              select
              label="User Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              fullWidth
              SelectProps={{
                IconComponent: ArrowDropDownIcon,
              }}
              sx={{
                mb: 2,
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                "& .MuiSelect-icon": { color: "#fff" },
                "& .MuiFilledInput-input": { color: "#fff" },
                "& .MuiInputLabel-root": { color: "#8c8c8c" },
              }}
            >
              <MenuItem value="user">Registered User</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
            </TextField>

            <FormControlLabel
              control={
                <Checkbox
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  sx={{ color: "#fff", "&.Mui-checked": { color: "#fff" } }}
                />
              }
              label={
                <Typography sx={{ color: "#fff", fontSize: "14px" }}>
                  Remember me
                </Typography>
              }
            />

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
                "&:hover": {
                  backgroundColor: "#f40612",
                },
              }}
            >
              Sign Up
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

        {/* Footer */}
        <Footer />
      </Box>
    </Box>
  );
};

export default SignUp;
