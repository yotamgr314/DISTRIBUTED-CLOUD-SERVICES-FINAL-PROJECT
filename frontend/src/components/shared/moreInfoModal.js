// src/components/shared/MoreInfoModal.js

import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Dialog,
  DialogContent,
  Grid,
  Slide,
  Divider,
} from "@mui/material";

// Slide in from left
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const MoreInfoModal = ({ open, onClose, details = {} }) => {
  // Fallbacks if not provided
  const {
    isSeries = true,
    title = "House of Ninjas",
    nSeriesLabel = true,
    newSeasons = "New 3 Seasons",
    year = "2024",
    hdAvailable = true,
    adAvailable = true,
    maturityRating = "TV-MA  smoking, violence",
    top10Rank = "#2 in TV Shows Today",
    summary = `Years after retiring from their formidable ninja lives, a dysfunctional family must 
      return to shadowy missions to counter a string of looming threats.`,
    // Upper-right details
    cast = "Kento Kaku, Yosuke Eguchi, Tae Kimura, ...",
    genresList = "TV Dramas, Japanese, TV Thrillers",
    showIs = "Dark, Suspenseful, Exciting",
    // Lower "About" section fields
    director = "Dave Boyle",
    aboutMaturityRating = "TV-MA   smoking, violence    For Mature Audiences.",
    disclaimers = "smoking, violence    For Mature Audiences.",
    // Episodes array
    episodes = [
      {
        image: "/assets/newOnNetFlix.svg",
        title: "פרק 1",
        description: "תיאור קצר לפרק 1...",
        runtime: "55m",
      },
      {
        image: "/assets/newOnNetFlix.svg",
        title: "פרק 2",
        description: "תיאור קצר לפרק 2...",
        runtime: "53m",
      },
    ],
    // Trailers array
    trailers = [
      {
        image: "/assets/newOnNetFlix.svg",
        caption: "Season 1 Trailer 1: House of Ninjas",
      },
      {
        image: "/assets/newOnNetFlix.svg",
        caption: "Season 1 Trailer 2: House of Ninjas",
      },
      {
        image: "/assets/newOnNetFlix.svg",
        caption: "Season 1 Trailer 3: House of Ninjas",
      },
    ],
  } = details;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      fullWidth
      maxWidth="md"
      // remove scrollbar
      sx={{
        "& .MuiDialog-container": {
          alignItems: "flex-start",
        },
      }}
      PaperProps={{
        sx: {
          backgroundColor: "#141414",
          color: "#fff",
          borderRadius: 0,
          maxHeight: "none",
          overflow: "hidden",
        },
      }}
    >
      {/* TOP SECTION */}
      <Box sx={{ position: "relative", p: 2 }}>
        {/* X Button Icon */}
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            p: 0.5,
          }}
        >
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/assets/xButtonIcon.svg`}
            alt="Close"
            sx={{ width: 24, height: 24 }}
          />
        </IconButton>

        {/* N SERIES label (optional) */}
        {nSeriesLabel && (
          <Typography
            variant="body2"
            sx={{
              color: "#E50914",
              mb: 1,
              fontWeight: "bold",
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            N SERIES
          </Typography>
        )}

        {/* Title */}
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
          {title}
        </Typography>

        {/* Buttons row */}
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <Button
            variant="outlined"
            sx={{ color: "#fff", borderColor: "#fff", textTransform: "none" }}
          >
            Review
          </Button>
          <Button
            variant="outlined"
            sx={{ color: "#fff", borderColor: "#fff", textTransform: "none" }}
          >
            My List
          </Button>
        </Box>

        {/* Info row */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 1,
            mb: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            {newSeasons}
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            {year}
          </Typography>
          {hdAvailable && (
            <Box
              component="img"
              src={`${process.env.PUBLIC_URL}/assets/hdIcon.svg`}
              alt="HD"
              sx={{ width: 24, height: 16 }}
            />
          )}
          {adAvailable && (
            <Box
              component="img"
              src={`${process.env.PUBLIC_URL}/assets/adIcon.svg`}
              alt="AD"
              sx={{ width: 24, height: 16 }}
            />
          )}
        </Box>

        {/* Maturity, top10 rank */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 1,
            mb: 2,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            {maturityRating}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              component="img"
              src={`${process.env.PUBLIC_URL}/assets/top10Icon.svg`}
              alt="Top 10"
              sx={{ width: 24, height: 24 }}
            />
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              {top10Rank}
            </Typography>
          </Box>
        </Box>

        {/* Split top into 2 columns: summary (left), cast/genres/showIs (right) */}
        <Box sx={{ display: "flex", gap: 4, mb: 2, flexWrap: "wrap" }}>
          {/* Left: summary */}
          <Box sx={{ flex: 2, minWidth: { xs: "100%", md: "60%" } }}>
            <Typography variant="body2" sx={{ lineHeight: 1.5 }}>
              {summary}
            </Typography>
          </Box>
          {/* Right: cast, genres, showIs */}
          <Box sx={{ flex: 1, minWidth: { xs: "100%", md: "35%" } }}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <strong>Cast:</strong> {cast}
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <strong>Genres:</strong> {genresList}
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <strong>This show is:</strong> {showIs}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ borderColor: "#333" }} />

      {/* LOWER SECTION */}
      <DialogContent
        sx={{
          px: 2,
          pt: 2,
          pb: 2,
          overflow: "visible",
          "::-webkit-scrollbar": { display: "none" },
        }}
      >
        {/* Episodes */}
        {isSeries && (
          <Box sx={{ mb: 4 }}>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Episodes
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", opacity: 0.8 }}
              >
                {title}
              </Typography>
            </Box>
            {episodes.map((ep, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 2,
                  mb: 2,
                  p: 1,
                  backgroundColor: "#222",
                  borderRadius: 1,
                }}
              >
                <Box
                  component="img"
                  src={
                    ep.image ||
                    `${process.env.PUBLIC_URL}/assets/newOnNetFlix.svg`
                  }
                  alt={`Episode ${index + 1}`}
                  sx={{
                    width: 120,
                    height: 70,
                    objectFit: "cover",
                    borderRadius: 1,
                  }}
                />
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    {ep.title || `Episode ${index + 1}`}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#ccc" }}>
                    {ep.description || "Short episode summary..."}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: "#fff" }}>
                    {ep.runtime || "53m"}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        )}

        {/* Trailers & More */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Trailers & More
          </Typography>
          <Grid container spacing={2}>
            {trailers.slice(0, 3).map((tr, i) => (
              <Grid item xs={12} sm={4} md={4} key={i}>
                <Box
                  component="img"
                  src={tr.image}
                  alt={`Trailer ${i + 1}`}
                  sx={{
                    width: "100%",
                    height: 120,
                    objectFit: "cover",
                    borderRadius: 1,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{ mt: 1, fontWeight: "bold", color: "#ccc" }}
                >
                  {tr.caption}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* About Section - includes Director, Maturity, disclaimers, etc. */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            About {title}
          </Typography>

          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>Director:</strong> {director}
          </Typography>

          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>Maturity rating:</strong> {aboutMaturityRating}
          </Typography>

          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>Warning/Disclaimers:</strong> {disclaimers}
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

MoreInfoModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  details: PropTypes.shape({
    isSeries: PropTypes.bool,
    title: PropTypes.string,
    nSeriesLabel: PropTypes.bool,
    newSeasons: PropTypes.string,
    year: PropTypes.string,
    hdAvailable: PropTypes.bool,
    adAvailable: PropTypes.bool,
    maturityRating: PropTypes.string,
    top10Rank: PropTypes.string,
    summary: PropTypes.string,
    cast: PropTypes.string,
    genresList: PropTypes.string,
    showIs: PropTypes.string,
    director: PropTypes.string,
    aboutMaturityRating: PropTypes.string,
    disclaimers: PropTypes.string,
    episodes: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        runtime: PropTypes.string,
      })
    ),
    trailers: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string,
        caption: PropTypes.string,
      })
    ),
  }),
};

export default MoreInfoModal;
