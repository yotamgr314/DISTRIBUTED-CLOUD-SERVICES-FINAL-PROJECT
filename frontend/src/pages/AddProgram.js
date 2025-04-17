import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  TextField,
  MenuItem,
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
    posterURL: "",
    summary: "",
    programPhotos: [null, null, null],
  });
  const [photoPreviews, setPhotoPreviews] = useState(["", "", ""]);

  useEffect(() => {
    const token = getToken();
    const role = sessionStorage.getItem("role");

    if (!token) {
      navigate("/SignIn");
    } else if (role !== "admin") {
      navigate("/AccountHomePage");
    }
  }, [navigate]);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handlePhotoChange = (index, file) => {
    const updatedPhotos = [...form.programPhotos];
    updatedPhotos[index] = file;

    const previewURLs = [...photoPreviews];
    previewURLs[index] = file ? URL.createObjectURL(file) : "";

    setForm((prev) => ({ ...prev, programPhotos: updatedPhotos }));
    setPhotoPreviews(previewURLs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted program:", form);
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

          <TextField
            label="Type"
            select
            value={form.type}
            onChange={(e) => handleChange("type", e.target.value)}
            variant="filled"
            fullWidth
            SelectProps={{
              MenuProps: {
                container: document.getElementById("add-program-root"), // ✅ עיקר התיקון
                PaperProps: {
                  sx: { backgroundColor: "#1f1f1f" },
                },
              },
            }}
            InputProps={{ sx: { color: "#fff" } }}
            InputLabelProps={{ sx: { color: "#aaa" } }}
            sx={{ backgroundColor: "#1f1f1f" }}
          >
            <MenuItem value="movie">Movie</MenuItem>
            <MenuItem value="tv">TV Series</MenuItem>
          </TextField>

          <TextField
            label="Poster URL"
            value={form.posterURL}
            onChange={(e) => handleChange("posterURL", e.target.value)}
            variant="filled"
            fullWidth
            InputProps={{ sx: { color: "#fff" } }}
            InputLabelProps={{ sx: { color: "#aaa" } }}
            sx={{ backgroundColor: "#1f1f1f" }}
          />

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

          <Typography variant="h6" sx={{ mt: 2 }}>
            Program Photos (Upload 3 Images)
          </Typography>

          {form.programPhotos.map((_, index) => (
            <Box
              key={index}
              sx={{ display: "flex", flexDirection: "column", gap: 1 }}
            >
              <input
                accept="image/*"
                type="file"
                onChange={(e) =>
                  handlePhotoChange(index, e.target.files?.[0] || null)
                }
              />
              {photoPreviews[index] && (
                <Box
                  component="img"
                  src={photoPreviews[index]}
                  alt={`Preview ${index + 1}`}
                  sx={{
                    width: "100%",
                    maxHeight: "200px",
                    objectFit: "cover",
                    borderRadius: 1,
                  }}
                />
              )}
            </Box>
          ))}

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
            Save Program (Mock)
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
