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
import CloseIcon from "@mui/icons-material/Close";
import RateReviewIcon from "@mui/icons-material/RateReview";
import AddIcon from "@mui/icons-material/Add";

// Slides in from the left side
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

/**
 * MoreInfoModal - Netflix-like modal with styling to match your target screenshot.
 */
const MoreInfoModal = ({ open, onClose, details = {} }) => {
  // Fallbacks if certain fields are not provided
  const {
    title = "House of Ninjas",
    rankInfo = "N6 #2 in TV Shows Today",
    year = "2023",
    format = "4K • 5.1",
    genre = "Action • Drama • Comedy",
    rating = "TV-14",
    summary = `Years after retiring from their formidable ninja lives, a dysfunctional family must 
        return to shadowy missions but counteract a string of looming threats.`,
    isSeries = true,
    episodes = [],

    // Bottom portion data:
    trailers = [
      {
        image: "/assets/newOnNetFlix.svg",
        caption: "Season 1 Trailer 1: House of Ninjas",
      },
      {
        image: "/assets/newOnNetFlix.svg",
        caption: "Season 1 Trailer 1: House of Ninjas",
      },
      {
        image: "/assets/newOnNetFlix.svg",
        caption: "Season 1 Trailer 1: House of Ninjas",
      },
    ],

    // "About" data:
    director = "Dave Boyle",
    cast = `Kento Kaku, Yosuke Eguchi, Tae Kimura, Kengo Kora, Aju Makita, Nobuko Miyamoto, 
      Tomorowo Taguchi, Riko Yoshio, Toko Emoto, Kyusaku Shimada, Pierre Taki, 
      Mariko Tsutsui, Tenta Banka, Takayuki Yamada`,
    genresList = "TV Dramas, Japanese, TV Thrillers",
    showIs = "Dark, Suspenseful, Exciting",
    maturityRating = "TV-MA  smoking, violence   For Mature Audiences.",
  } = details;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      fullWidth
      maxWidth="md"
      PaperProps={{
        sx: {
          backgroundColor: "#141414",
          color: "#fff",
          borderRadius: 0,
        },
      }}
    >
      {/* Top header: Title + Close Button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <IconButton onClick={onClose} sx={{ color: "#fff" }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <DialogContent sx={{ px: 2 }}>
        {/* Sub Header: Rank info, format, etc. */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 1,
            mb: 1,
          }}
        >
          {/* Review button */}
          <Button
            variant="outlined"
            startIcon={<RateReviewIcon />}
            sx={{ color: "#fff", borderColor: "#fff" }}
          >
            Review
          </Button>
          {/* My List button */}
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            sx={{ color: "#fff", borderColor: "#fff" }}
          >
            My List
          </Button>

          {/* Rank Info */}
          <Typography
            variant="body2"
            sx={{ opacity: 0.8, ml: { xs: 0, md: 2 } }}
          >
            {rankInfo}
          </Typography>
          {/* Dots */}
          <Typography
            variant="body2"
            sx={{ display: { xs: "none", md: "inline" } }}
          >
            &nbsp;•&nbsp;
          </Typography>

          {/* Year */}
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            {year}
          </Typography>
          <Typography
            variant="body2"
            sx={{ display: { xs: "none", md: "inline" } }}
          >
            &nbsp;•&nbsp;
          </Typography>

          {/* Format */}
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            {format}
          </Typography>
          <Typography
            variant="body2"
            sx={{ display: { xs: "none", md: "inline" } }}
          >
            &nbsp;•&nbsp;
          </Typography>

          {/* Genre */}
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            {genre}
          </Typography>
          <Typography
            variant="body2"
            sx={{ display: { xs: "none", md: "inline" } }}
          >
            &nbsp;•&nbsp;
          </Typography>

          {/* Rating */}
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            {rating}
          </Typography>
        </Box>

        {/* Summary */}
        <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.5 }}>
          {summary}
        </Typography>

        <Divider sx={{ mb: 2, borderColor: "#333" }} />

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
                {/* Episode image (example: /assets/newOnNetFlix.svg) */}
                <Box
                  component="img"
                  src={ep.image || "/assets/newOnNetFlix.svg"}
                  alt={`Episode ${index + 1}`}
                  sx={{
                    width: 120,
                    height: 70,
                    objectFit: "cover",
                    borderRadius: 1,
                  }}
                />
                {/* Episode info in center */}
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    {ep.title || `Episode ${index + 1}`}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#ccc" }}>
                    {ep.description || "Short episode summary..."}
                  </Typography>
                </Box>
                {/* Runtime on the far right */}
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
                {/* Trailer image */}
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
                {/* Trailer caption */}
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

        {/* About Section */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            About {title}
          </Typography>
          {/* Director */}
          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>Director:</strong> {director}
          </Typography>
          {/* Cast */}
          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>Cast:</strong> {cast}
          </Typography>
          {/* Genres */}
          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>Genres:</strong> {genresList}
          </Typography>
          {/* This show is: */}
          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>This show is:</strong> {showIs}
          </Typography>
          {/* Maturity rating */}
          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>Maturity rating:</strong> {maturityRating}
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
    title: PropTypes.string,
    rankInfo: PropTypes.string,
    year: PropTypes.string,
    format: PropTypes.string,
    genre: PropTypes.string,
    rating: PropTypes.string,
    summary: PropTypes.string,
    isSeries: PropTypes.bool,
    episodes: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        runtime: PropTypes.string,
      })
    ),
    // For the "Trailers & More" section
    trailers: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string,
        caption: PropTypes.string,
      })
    ),
    // "About" data
    director: PropTypes.string,
    cast: PropTypes.string,
    genresList: PropTypes.string,
    showIs: PropTypes.string,
    maturityRating: PropTypes.string,
  }),
};

export default MoreInfoModal;
