// src/pages/AddProgram.js
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../services/authService";

import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  TextField,
  MenuItem,
} from "@mui/material";
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
    programPhotos: ["", "", ""],
  });

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

  const handlePhotoChange = (index, value) => {
    const updatedPhotos = [...form.programPhotos];
    updatedPhotos[index] = value;
    setForm((prev) => ({ ...prev, programPhotos: updatedPhotos }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted program:", form);
  };

  return (
    <Box sx={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh" }}>
      <Navbar />

      <Container
        component="form"
        onSubmit={handleSubmit}
        sx={{
          mt: 12,
          mb: 6,
          display: "flex",
          flexDirection: "column",
          gap: 3,
          maxWidth: "700px",
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
          Program Photos (3 URLs)
        </Typography>
        {form.programPhotos.map((photo, index) => (
          <TextField
            key={index}
            label={`Photo ${index + 1}`}
            value={photo}
            onChange={(e) => handlePhotoChange(index, e.target.value)}
            variant="filled"
            fullWidth
            InputProps={{ sx: { color: "#fff" } }}
            InputLabelProps={{ sx: { color: "#aaa" } }}
            sx={{ backgroundColor: "#1f1f1f" }}
          />
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

      <FooterAccountHomePage />
    </Box>
  );
};

export default AddProgram;
