// 📁 src/pages/AdminReviewsPage.js

import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Rating,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Navbar from "../components/shared/navbar";
import FooterAccountHomePage from "../components/shared/footerAccountHomePage";

const dummyReviews = [
  {
    program: "Breaking Bad",
    user: "Jane",
    type: "TV Show",
    genre: "Drama",
    rating: 5,
    text: "A masterpiece of storytelling. The character arcs, the pacing, the cinematography – everything is top notch. Highly recommended!",
  },
  {
    program: "Interstellar",
    user: "David",
    type: "Movie",
    genre: "Sci-Fi",
    rating: 4,
    text: "Visually stunning and emotional. A bit heavy on exposition, but Hans Zimmer's score carries you through.",
  },
  {
    program: "Friends",
    user: "Mike",
    type: "TV Show",
    genre: "Comedy",
    rating: 3,
    text: "Classic and fun but a bit outdated. Still makes me laugh, though some jokes haven't aged well.",
  },
  {
    program: "Friends",
    user: "Mike",
    type: "TV Show",
    genre: "Comedy",
    rating: 3,
    text: "Classic and fun but a bit outdated. Still makes me laugh, though some jokes haven't aged well.",
  },
  {
    program: "Friends",
    user: "Mike",
    type: "TV Show",
    genre: "Comedy",
    rating: 3,
    text: "Classic and fun but a bit outdated. Still makes me laugh, though some jokes haven't aged well.",
  },
  {
    program: "Friends",
    user: "Mike",
    type: "TV Show",
    genre: "Comedy",
    rating: 3,
    text: "Classic and fun but a bit outdated. Still makes me laugh, though some jokes haven't aged well.",
  },
  {
    program: "Friends",
    user: "Mike",
    type: "TV Show",
    genre: "Comedy",
    rating: 3,
    text: "Classic and fun but a bit outdated. Still makes me laugh, though some jokes haven't aged well.",
  },
  {
    program: "Friends",
    user: "Mike",
    type: "TV Show",
    genre: "Comedy",
    rating: 3,
    text: "Classic and fun but a bit outdated. Still makes me laugh, though some jokes haven't aged well.",
  },
  {
    program: "Friends",
    user: "Mike",
    type: "TV Show",
    genre: "Comedy",
    rating: 3,
    text: "Classic and fun but a bit outdated. Still makes me laugh, though some jokes haven't aged well.",
  },
];

const genres = ["All", "Drama", "Comedy", "Action", "Thriller", "Sci-Fi"];
const types = ["All", "Movie", "TV Show"];

const AdminReviewsPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Filters state
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");
  const [type, setType] = useState("All");

  // Modal state
  const [selected, setSelected] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  // Filter logic
  const filtered = dummyReviews.filter((r) => {
    const matchesTitle = r.program.toLowerCase().includes(search.toLowerCase());
    const matchesGenre = genre === "All" || r.genre === genre;
    const matchesType = type === "All" || r.type === type;
    return matchesTitle && matchesGenre && matchesType;
  });

  const openReview = (review) => {
    setSelected(review);
    setOpenModal(true);
  };
  const closeReview = () => {
    setOpenModal(false);
    setSelected(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: "linear-gradient(to right, #141414, #1c1c1c)",
        color: "#fff",
        overflowX: "hidden",
      }}
    >
      <Navbar />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flex: 1,
          px: 3,
          pt: 10,
          pb: 4,
        }}
      >
        <Typography variant="h4" sx={{ mb: 4, fontWeight: "bold" }}>
          Admin – All User Reviews
        </Typography>

        {/* Filters */}
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: 2,
            mb: 4,
          }}
        >
          <TextField
            label="Search Program"
            variant="filled"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{
              backgroundColor: "#222",
              flex: 1,
              "& .MuiFilledInput-input": { color: "#fff", fontSize: "16px" },
              "& .MuiInputLabel-root": { color: "#aaa", fontSize: "16px" },
            }}
          />

          <FormControl
            variant="filled"
            sx={{
              minWidth: 150,
              backgroundColor: "#222",
              "& .MuiInputLabel-root": { color: "#aaa", fontSize: "16px" },
              "& .MuiFilledInput-input": { color: "#fff", fontSize: "16px" },
            }}
          >
            <InputLabel>Genre</InputLabel>
            <Select value={genre} onChange={(e) => setGenre(e.target.value)}>
              {genres.map((g) => (
                <MenuItem key={g} value={g}>
                  {g}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl
            variant="filled"
            sx={{
              minWidth: 150,
              backgroundColor: "#222",
              "& .MuiInputLabel-root": { color: "#aaa", fontSize: "16px" },
              "& .MuiFilledInput-input": { color: "#fff", fontSize: "16px" },
            }}
          >
            <InputLabel>Type</InputLabel>
            <Select value={type} onChange={(e) => setType(e.target.value)}>
              {types.map((t) => (
                <MenuItem key={t} value={t}>
                  {t}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        {/* Reviews List */}
        {filtered.map((r, idx) => (
          <Box
            key={idx}
            onClick={() => openReview(r)}
            sx={{
              mb: 3,
              p: 3,
              borderRadius: 2,
              backgroundColor: "#1f1f1f",
              boxShadow: "0 0 12px rgba(0,0,0,0.4)",
              cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.2s",
              "&:hover": {
                transform: "scale(1.02)",
                boxShadow: "0 0 20px rgba(0,0,0,0.6)",
              },
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {r.program} — {r.user}
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 1, color: "#aaa", fontSize: "0.9rem" }}
            >
              {r.type} | {r.genre} |{" "}
              <Rating
                value={r.rating}
                readOnly
                size="small"
                sx={{ color: "#fbc02d" }}
              />
            </Typography>
            <Typography
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {r.text}
            </Typography>
          </Box>
        ))}

        {filtered.length === 0 && (
          <Typography>No reviews match your criteria.</Typography>
        )}
      </Box>

      {/* Footer always at bottom */}
      <FooterAccountHomePage />

      {/* Review Detail Modal */}
      <Dialog
        open={openModal}
        onClose={closeReview}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          sx: {
            backgroundColor: "#141414",
            color: "#fff",
            borderRadius: 2,
            p: 2,
          },
        }}
      >
        <DialogTitle>
          {selected?.program} — {selected?.user}
        </DialogTitle>
        <DialogContent
          dividers
          sx={{
            maxHeight: "60vh",
            overflowY: "auto",
            "&::-webkit-scrollbar": { width: "0.4rem" },
            "&::-webkit-scrollbar-thumb": { backgroundColor: "#333" },
          }}
        >
          {selected && (
            <>
              <Typography sx={{ mb: 1 }}>
                <Rating
                  value={selected.rating}
                  readOnly
                  size="medium"
                  sx={{ color: "#fbc02d" }}
                />
              </Typography>
              <Typography whiteSpace="pre-line">{selected.text}</Typography>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={closeReview} variant="contained" color="error">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AdminReviewsPage;
