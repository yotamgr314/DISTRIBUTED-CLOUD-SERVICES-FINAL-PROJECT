// src/pages/AddProgram.js

import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  TextField,
  MenuItem,
  ToggleButton, // ✅ added
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getToken } from "../services/authService";
import Navbar from "../components/shared/navbar";
import FooterAccountHomePage from "../components/shared/footerAccountHomePage";

const AddProgram = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    cast: "",
    genres: "",
    thisShowIs: "",
    type: "movie",
    posterFile: null,
    summary: "",
    programPhotos: [],
  });
  const [posterPreview, setPosterPreview] = useState("");
  const [photoPreviews, setPhotoPreviews] = useState([]);

  useEffect(() => {
    const token = getToken();
    const role = sessionStorage.getItem("role");
    if (!token) navigate("/SignIn");
    else if (role !== "admin") navigate("/AccountHomePage");
  }, [navigate]);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handlePosterChange = (file) => {
    if (!file) return;
    setForm((prev) => ({ ...prev, posterFile: file }));
    setPosterPreview(URL.createObjectURL(file));
  };

  const handlePhotosChange = (files) => {
    const selectedFiles = Array.from(files);
    const combined = [...form.programPhotos, ...selectedFiles].slice(0, 3);
    const previews = combined.map((file) => URL.createObjectURL(file));
    setForm((prev) => ({ ...prev, programPhotos: combined }));
    setPhotoPreviews(previews);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", form);
  };

  return (
    <Box
      id="add-program-root"
      sx={{
        minHeight: "100vh",
        backgroundImage: 'url("/assets/hero-image.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        }}
      />

      {/* Navbar */}
      <Box sx={{ position: "relative", zIndex: 10 }}>
        <Navbar />
      </Box>

      {/* Main Content */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: 2,
          pt: 10,
          pb: 6,
          minHeight: "calc(100vh - 150px)",
        }}
      >
        <Container
          sx={{
            maxWidth: "700px",
            width: "100%",
            backgroundColor: "rgba(20,20,20,0.95)",
            p: 4,
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            gap: 3,
            color: "#fff",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            Add New Program
          </Typography>

          {/* Title */}
          <TextField
            label="Program Title"
            value={form.title}
            onChange={(e) => handleChange("title", e.target.value)}
            variant="filled"
            fullWidth
            InputProps={{ sx: { color: "#fff" } }}
            InputLabelProps={{ sx: { color: "#aaa" } }}
            sx={{ backgroundColor: "#1f1f1f" }}
          />

          {/* Cast */}
          <TextField
            label="Cast"
            value={form.cast}
            onChange={(e) => handleChange("cast", e.target.value)}
            variant="filled"
            multiline
            minRows={2}
            fullWidth
            placeholder="e.g. John Doe, Jane Smith"
            InputProps={{ sx: { color: "#fff" } }}
            InputLabelProps={{ sx: { color: "#aaa" } }}
            sx={{ backgroundColor: "#1f1f1f" }}
          />

          {/* Genres */}
          <TextField
            label="Genres (comma separated)"
            value={form.genres}
            onChange={(e) => handleChange("genres", e.target.value)}
            variant="filled"
            fullWidth
            InputProps={{ sx: { color: "#fff" } }}
            InputLabelProps={{ sx: { color: "#aaa" } }}
            sx={{ backgroundColor: "#1f1f1f" }}
          />

          {/* This show is... */}
          <TextField
            label="This show is..."
            value={form.thisShowIs}
            onChange={(e) => handleChange("thisShowIs", e.target.value)}
            variant="filled"
            multiline
            minRows={2}
            fullWidth
            placeholder="e.g. Suspenseful, Exciting"
            InputProps={{ sx: { color: "#fff" } }}
            InputLabelProps={{ sx: { color: "#aaa" } }}
            sx={{ backgroundColor: "#1f1f1f" }}
          />

          {/* Type using ToggleButtons */}
          <Typography variant="subtitle1" sx={{ color: "#aaa" }}>
            Type
          </Typography>
          <Box
            sx={{
              display: "flex",
              border: "1px solid #333",
              borderRadius: 1,
              overflow: "hidden",
              backgroundColor: "#1f1f1f",
            }}
          >
            <ToggleButton
              value="movie"
              selected={form.type === "movie"}
              onClick={() => handleChange("type", "movie")}
              disableRipple
              sx={{
                flex: 1,
                color: "#ccc",
                transition: "none",
                "&.Mui-selected": {
                  backgroundColor: "#0E1B2E", // exact side‑nav selected color
                  color: "#fff",
                },
                "&:not(.Mui-selected):hover": {
                  backgroundColor: "rgba(255,255,255,0.08)",
                },
                "&.Mui-selected:hover": {
                  backgroundColor: "#0E1B2E",
                },
              }}
            >
              Movie
            </ToggleButton>
            <ToggleButton
              value="tv"
              selected={form.type === "tv"}
              onClick={() => handleChange("type", "tv")}
              disableRipple
              sx={{
                flex: 1,
                color: "#ccc",
                transition: "none",
                "&.Mui-selected": {
                  backgroundColor: "#0E1B2E",
                  color: "#fff",
                },
                "&:not(.Mui-selected):hover": {
                  backgroundColor: "rgba(255,255,255,0.08)",
                },
                "&.Mui-selected:hover": {
                  backgroundColor: "#0E1B2E",
                },
              }}
            >
              TV Series
            </ToggleButton>
          </Box>

          {/* Poster Upload */}
          <Box>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Upload Poster Image
            </Typography>
            <Button variant="outlined" component="label">
              Choose Poster
              <input
                hidden
                accept="image/*"
                type="file"
                onChange={(e) =>
                  handlePosterChange(e.target.files?.[0] || null)
                }
              />
            </Button>
            {posterPreview && (
              <Box
                component="img"
                src={posterPreview}
                alt="Poster Preview"
                sx={{
                  width: "100%",
                  maxHeight: "200px",
                  objectFit: "cover",
                  borderRadius: 1,
                  mt: 2,
                }}
              />
            )}
          </Box>

          {/* Summary */}
          <TextField
            label="Summary"
            value={form.summary}
            onChange={(e) => handleChange("summary", e.target.value)}
            variant="filled"
            multiline
            minRows={3}
            fullWidth
            InputProps={{ sx: { color: "#fff" } }}
            InputLabelProps={{ sx: { color: "#aaa" } }}
            sx={{ backgroundColor: "#1f1f1f" }}
          />

          {/* Multiple Image Upload */}
          <Box>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Upload Program Photos (Up to 3)
            </Typography>
            <Button variant="outlined" component="label">
              Choose Images
              <input
                hidden
                multiple
                accept="image/*"
                type="file"
                onChange={(e) => handlePhotosChange(e.target.files)}
              />
            </Button>
            <Box sx={{ display: "flex", gap: 2, mt: 2, flexWrap: "wrap" }}>
              {photoPreviews.map((url, index) => (
                <Box
                  key={index}
                  component="img"
                  src={url}
                  alt={`Program ${index + 1}`}
                  sx={{
                    width: "100%",
                    maxWidth: "200px",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: 1,
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Save */}
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#E50914",
              fontWeight: "bold",
              textTransform: "none",
              mt: 2,
              "&:hover": { backgroundColor: "#b81d24" },
            }}
          >
            Save Program
          </Button>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ position: "relative", zIndex: 2 }}>
        <FooterAccountHomePage />
      </Box>
    </Box>
  );
};

export default AddProgram;
